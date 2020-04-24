/* eslint-disable react/display-name */
import Link from 'next/link';
import { parseCookies } from 'nookies';
import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useInfos } from './context/LocalState';
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
          <div className="drops" key={item.id}>
            <li>
              <Link
                href="/categories/[categorie]"
                as={`/categories/${item.id}`}
              >
                <a>{item.name}</a>
              </Link>
            </li>
          </div>
        ))}
      </div>
    </OptionStyles>
  );
};

const Nav = () => {
  // const [withToken, setDestroyToken] = useState(token);
  const { user, userLogout } = useInfos();

  // const userLogout = () => {
  //   setDestroyToken(destroyCookie(null, 'fromClientSide'));
  //   Router.push('/');
  //   cogoToast.success('Au Revoir et a tres vite');
  // };

  return (
    <NavStyles>
      {Object.entries(user).length > 0 && (
        <button type="button" style={{ color: 'orange' }}>
          {user?.user?.username}
        </button>
      )}
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
      {Object.entries(user).length > 0 || Object.entries(token).length > 0 ? (
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
