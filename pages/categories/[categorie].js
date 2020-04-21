import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { getAllCategories, getSingleCategory } from '../../lib/api';

export const Center = styled.div`
  text-align: center;
`;
export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 3rem auto;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Category = ({ singleCategory }) => (
  <Center>
    <Title bgTitle={singleCategory.name} center withRow />
    <ItemsList>
      {!singleCategory.recettes.length && (
        <Title bgTitle="Sorry, aucune recette pour le moment" center withRow />
      )}
      {singleCategory.recettes.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </ItemsList>
  </Center>
);

export async function getStaticProps({ params }) {
  const singleCategory = await getSingleCategory(params.categorie);
  return {
    props: { singleCategory },
  };
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories();
  return {
    paths: allCategories.map(item => `/categories/${item.id}`) || [],
    fallback: true,
  };
}

export default Category;
