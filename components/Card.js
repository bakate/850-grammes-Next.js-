import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import ItemStyles from './styles/ItemStyles';
import Title from './Title';

const Card = ({ image, title, id, duration, category }) => {
  let secondsLeft = duration * 60; // to convert minutes within seconds
  const hours = ~~(secondsLeft / 3600); // to get hours the ~~ is equal to Math.floor
  secondsLeft %= 3600; // to get the remaining minutes
  const minutes = ~~(secondsLeft / 60);

  // const getDuration = secondsLeft=> {
  //   const hours = Math.floor(secondsLeft / 3600);
  //   secondsLeft %= 3600;
  //   const minutes = Math.floor(secondsLeft / 60);
  //   secondsLeft %= 60;
  //   console.log(hours, minutes, secondsLeft);

  // }

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
        {hours >= 1 && (
          <>
            <b>{hours}</b> <span>heure{hours > 1 ? 's' : ''} et</span>
          </>
        )}{' '}
        {minutes > 0 && (
          <>
            <b>{minutes}</b>
            <span> minutes</span>
          </>
        )}
        {category && (
          <p>Niveau de Difficult&eacute;: {category?.difficulty} 💪💪</p>
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
