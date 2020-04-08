import React from 'react';
import { useRouter } from 'next/router';
// import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
// import Query from './Query';
import Title from './Title';
import Card from './Card';

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

// const CATEGORY_QUERY = gql`
//   query CATEGORY_QUERY($id: ID!) {
//     category(id: $id) {
//       name
//       recettes {
//         id
//         title
//         published
//         url
//         duration
//         category {
//           difficulty
//         }
//         image {
//           url
//         }
//       }
//     }
//   }
// `;

const Categories = ({ category }) => {
  const router = useRouter();
  const { id } = router.query;
  // const { loading, error, data } = useQuery(CATEGORY_QUERY, {
  //   variables: { id },
  // });
  // if (loading) return <h3>Loading...</h3>;

  // if (error) return `Error ${error.message}`;
  return (
    <Center>
      <Title bgTitle={category.name} center withRow />
      <ItemsList>
        {!category.recettes.length && (
          <Title title="Désolé, Pas de recettes pour le moment" center />
        )}
        {category.recettes.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </ItemsList>
    </Center>
  );
};

export default Categories;
