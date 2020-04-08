// import React from 'react';
// // import { gql, useQuery } from '@apollo/client';
// import { Center, ItemsList } from './Categories';
// import Card from './Card';
// import Title from './Title';

// // const RECIPES_QUERY = gql`
// //   query RECIPES_QUERY {
// //     recettes(limit: 6, sort: "published:desc") {
// //       id
// //       title
// //       url
// //       duration
// //       image {
// //         url
// //       }
// //     }
// //   }
// // `;

// const Recipes = ({ recettes }) => (
//   // const { loading, error, data } = useQuery(RECIPES_QUERY);
//   // if (loading) return <h3>Loading...</h3>;
//   // if (error) return <h3>`Error ${error.message}`</h3>;
//   <Center>
//     <Title bgTitle="decouvrez rapidement nos 6 dernières recettes..." center />
//     <ItemsList>
//       {recettes.map(recipe => (
//         <Card key={recipe.id} {...recipe} />
//       ))}
//     </ItemsList>
//   </Center>
// );
// export default Recipes;
