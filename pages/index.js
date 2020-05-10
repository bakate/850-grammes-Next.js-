import { Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Title from '../components/Title';
import { getAllRecipesForHomePage } from '../lib/api';
import { Gridy } from './categories/[categorie]';

export default function Index({ allRecipes }) {
  return (
    <Box textAlign="center">
      <Title
        title="d&eacute;couvre rapidement nos 6 derni&egrave;res recettes..."
        center
      />
      <Gridy>
        {allRecipes.map(recipe => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </Gridy>
    </Box>
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
