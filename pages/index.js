import PropTypes from 'prop-types';
import Card from '../components/Card';
import Title from '../components/Title';
import { getAllRecipesForHomePage } from '../lib/api';
import { Center, ItemsList } from './categories/[categorie]';

export default function Index({ allRecipes }) {
  return (
    <Center>
      <Title
        bgTitle="decouvrez rapidement nos 6 dernieres recettes..."
        center
      />
      <ItemsList>
        {allRecipes.map(recipe => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </ItemsList>
    </Center>
  );
}
Index.propTypes = {
  allRecipes: PropTypes.array,
};

export async function getStaticProps() {
  const allRecipes = await getAllRecipesForHomePage();
  return {
    props: {
      allRecipes,
    },
  };
}
