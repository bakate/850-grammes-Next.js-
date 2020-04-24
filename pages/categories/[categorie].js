/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 60px;
  place-items: center;
  /* margin: 3rem auto; */
  /* max-width: var(--maxWidth); */
  @media (max-width: 767px) {
    justify-content: center;
    margin: 0 auto;
    padding: 2rem;
  }
`;

const Category = ({ singleCategory }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Center>
      <Title bgTitle={singleCategory?.name} center withRow />
      <ItemsList>
        {!singleCategory.recettes?.length && (
          <Title
            bgTitle="Sorry, aucune recette pour le moment"
            center
            withRow
          />
        )}
        {singleCategory?.recettes?.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </ItemsList>
    </Center>
  );
};
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
