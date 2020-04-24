import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import ItemStyles from './styles/ItemStyles';
import Title from './Title';

const Card = ({ image, title, id, duration, category }) => {
  const [firstImage] = image;
  return (
    <ItemStyles>
      <Title title={title} center />
      <div>
        <Link href="/recettes/[id]" as={`/recettes/${id}`}>
          <a>
            <img src={firstImage.url} alt={title} />
          </a>
        </Link>
      </div>
      <div>
        <span>{duration} minutes</span>
        {category && (
          <p>Niveau de Difficult&eacute;: {category?.difficulty} 💪🏻💪🏻</p>
        )}
      </div>
    </ItemStyles>
  );
};

Card.propTypes = {
  category: PropTypes.object,
  duration: PropTypes.number,
  id: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default Card;
