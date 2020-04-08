import React from 'react';
import Link from 'next/link';
// import { gql, useQuery } from '@apollo/client';
import { AiFillCaretDown } from 'react-icons/ai';
import { NavStyles, OptionStyles } from './styles/NavStyles';

// const CATEGORIES_QUERY = gql`
//   query CATEGORIES_QUERY {
//     categories {
//       id
//       name
//     }
//   }
// `;

const CategoriesDropdown = ({ categories }) => (
  // const { error, loading, data } = useQuery(CATEGORIES_QUERY);
  // if (loading) return <p>"Loading"</p>;
  // if (error) return `Error ${error.message}`;
  <OptionStyles>
    <button type="button">
      Recettes
      <AiFillCaretDown />
    </button>
    <div className="categories">
      {categories.map(item => (
        <li className="drops" key={item.id}>
          <Link
            href={{
              pathname: 'category',
              query: { id: item.id },
            }}
          >
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </div>
  </OptionStyles>
);
const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Accueil</a>
    </Link>
    <Link href="/recipe">
      <>
        <CategoriesDropdown />
      </>
    </Link>
    <Link href="/about">
      <a>La Team</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
    <Link href="/signup">
      <a>S'inscrire</a>
    </Link>
  </NavStyles>
);

export default Nav;
