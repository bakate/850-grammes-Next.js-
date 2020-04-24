import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllCategories, retrieveItems } from '../../lib/api';
import socialData from './socialData';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function InfoStateProvider({ children }) {
  // function getUserFromLocalStorage() {
  //   const someone = localStorage.getItem('user');
  //   const nobody = { username: null, fromClientSide: null };
  //   return someone ? JSON.parse(someone) : nobody;
  // }

  // const [userFromLS, setUserFromLS] = useState();

  const [social, setSocial] = useState(socialData);
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const getCategories = async () => {
      const res = await getAllCategories({ signal: abortController.signal });
      setCategories(res);
    };
    getCategories();
    return () => {
      abortController.abort();
    };
  }, []);

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const findItems = query => {
  //     try {
  //       const res = retrieveItems(query, {
  //         signal: abortController.signal,
  //       });
  //       setSearch(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   findItems();
  //   return () => {
  //     abortController.abort();
  //   };
  // }, []);

  const getItems = async query => {
    const res = await retrieveItems(query);
    console.log(res);

    setSearch(res);
  };

  const userLogin = info => {
    setCookie(null, 'fromClientSide', info.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    setUser(info);
    if (info.jwt) {
      cogoToast.success(
        <div>
          <b>Trop bien {info.user.username}!</b>
          <div>Trop bien! Ton inscription est validee</div>
        </div>
      );
    } else {
      cogoToast.error("Quelque chose s'est mal passee");
    }
    Router.push('/');
  };

  const userLogout = () => {
    destroyCookie(null, 'fromClientSide');
    setUser({});
    Router.push('/');
    cogoToast.success('Au Revoir et a tres vite');
  };

  return (
    <LocalStateProvider
      value={{
        // setUser,
        userLogin,
        user,
        userLogout,
        categories,
        social,
        search,
        getItems,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useInfos() {
  const all = useContext(LocalStateContext);
  return all;
}

export { InfoStateProvider, useInfos };

// cartOpen,
// toggleCart,
// openCart,
// closeCart,
// updateCart,
// cartItems,
