/* eslint-disable react/display-name */
import Link from 'next/link';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useInfos } from '../pages/context/LocalState';
import { NavStyles, OptionStyles } from './styles/NavStyles';

export const CategoriesDropdown = () => {
  const { categories } = useInfos();

  return (
    <OptionStyles>
      <button type="button">
        Recettes
        <AiFillCaretDown />
      </button>
      <div className="categories">
        {categories?.map(item => (
          <li className="drops" key={item.id}>
            <Link href="/categories/[categorie]" as={`/categories/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </OptionStyles>
  );
};

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
