// import React from 'react';
// import Downshift, { resetIdCounter } from 'downshift';
// import { useRouter } from 'next/router';
// // import { useLazyQuery, gql } from '@apollo/client';
// import debounce from 'lodash.debounce';
// import styled from 'styled-components';
// import { DropDown, DropDownItem } from './styles/DropDownStyles';

// const SearchStyles = styled.div`
//   position: relative;
//   margin: 0 auto;
//   input {
//     padding: 2rem;
//     font-size: 2rem;
//     border-color: ${({ theme }) => theme.green};
//     text-align: center;
//     &:focus {
//       border-color: ${({ theme }) => theme.primary};
//       outline: none;
//     }
//   }
// `;
// // const SEARCH_ITEMS_QUERY = gql`
// //   query SEARCH_ITEMS_QUERY($searchTerm: String!) {
// //     recettes(where: { title_contains: $searchTerm }) {
// //       id
// //       title
// //       image {
// //         url
// //       }
// //     }
// //   }
// // `;

// const AutoComplete = ({ data }) => {
//   const router = useRouter();
//   // const handleChange = item => {
//   //   router.push({
//   //     pathname: '/recipe',
//   //     query: { id: item.id },
//   //   });
//   // };
//   // const [findRecipes, { loading, data }] = useLazyQuery(SEARCH_ITEMS_QUERY);
//   const items = data ? data.recettes : [];
//   const findItemsButSlowly = debounce(findRecipes, 300);
//   resetIdCounter();
//   return (
//     <SearchStyles>
//       <Downshift
//         onChange={handleChange}
//         itemToString={item => (item === null ? '' : item.title)}
//       >
//         {({
//           getInputProps,
//           getItemProps,
//           isOpen,
//           inputValue,
//           highlightedIndex,
//         }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 type: 'search',
//                 placeholder: 'Une Recette ?',
//                 id: 'search',
//                 className: loading ? 'loading' : 'input',
//                 onChange: e => {
//                   e.persist();
//                   findItemsButSlowly({
//                     variables: { searchTerm: e.target.value },
//                   });
//                 },
//               })}
//             />

//             {isOpen && (
//               <DropDown>
//                 {items.map((item, index) => {
//                   const { image } = item;
//                   const [firstImage] = image;
//                   return (
//                     <DropDownItem
//                       {...getItemProps({ item })}
//                       key={item.id}
//                       highlighted={index === highlightedIndex}
//                     >
//                       <img width="50" src={firstImage.url} alt={item.title} />
//                       {item.title}
//                     </DropDownItem>
//                   );
//                 })}
//                 {!items.length && !loading && (
//                   <DropDownItem>
//                     Oulalalah!! Nous n'avons pas encore de recette pour{' '}
//                     {inputValue}
//                   </DropDownItem>
//                 )}
//               </DropDown>
//             )}
//           </div>
//         )}
//       </Downshift>
//     </SearchStyles>
//   );
// };

// export default AutoComplete;
