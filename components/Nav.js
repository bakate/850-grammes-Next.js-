/* eslint-disable react/display-name */
import cogoToast from 'cogo-toast';
import Link from 'next/link';
import Router from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useInfos } from '../pages/api/LocalState';
import { NavStyles, OptionStyles } from './styles/NavStyles';

const token = parseCookies('fromClientSide');
// console.log(token);

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

const Nav = () => {
  const { user, setUser } = useInfos();
  if (token) {
    setUser(token);
  }

  const userLogout = () => {
    setUser(destroyCookie(null, 'fromClientSide'));
    Router.push('/');
    cogoToast.success('Au Revoir et a tres vite');
  };

  return (
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
      {Object.entries(user).length > 0 ? (
        <button type="button" onClick={userLogout}>
          Se Deconnecter
        </button>
      ) : (
        <Link href="/signup">
          <a>S'inscrire</a>
        </Link>
      )}
    </NavStyles>
  );
};
export default Nav;
