import cogoToast from 'cogo-toast';
import Router from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllCategories, retrieveItems } from '../../lib/api';
import socialData from './socialData';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function InfoStateProvider({ children }) {
  const [social, setSocial] = useState(socialData);
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  }, []);

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

  useEffect(() => {
    const abortController = new AbortController();
    const findItems = async query => {
      try {
        const res = await retrieveItems(query, {
          signal: abortController.signal,
        });
        setSearch(res);
      } catch (error) {
        console.log(error);
      }
    };
    findItems();
    return () => {
      abortController.abort();
    };
  }, []);

  const getItems = async query => {
    const res = await retrieveItems(query);
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
          <div>Trop bien! Ton inscription est valid&eacute;e</div>
        </div>
      );
    } else {
      cogoToast.error("Quelque chose s'est mal pass&eacute;e");
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
        handleToggle,
        show,
        height,
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
