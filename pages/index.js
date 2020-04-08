import React from 'react';
import { getAllRecipesForHome } from '../lib/api';

const index = ({ recettes }) => {
  console.log(recettes);

  return <>Hello Bakate</>;
};

export async function getServerSideProps() {
  const recettes = await getAllRecipesForHome();
  return { props: { recettes } };
}

export default index;
