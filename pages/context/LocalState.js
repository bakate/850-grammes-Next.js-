import { createContext, useContext, useEffect, useState } from 'react';
import { getAllCategories, retrieveItems } from '../../lib/api';
import socialData from './socialData';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // function getUserFromLocalStorage() {
  //   const someone = localStorage.getItem('user');
  //   const nobody = { username: null, token: null };
  //   return someone ? JSON.parse(someone) : nobody;
  // }

  // const [userFromLS, setUserFromLS] = useState();

  const [social, setSocial] = useState(socialData);
  // const [user, setUser] = useState();
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState([]);
  // const userLogin = person => {
  //   setUserFromLS(person);
  //   return localStorage.setItem('user', JSON.stringify(person));
  // };

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
    const findItems = async () => {
      try {
        const res = await retrieveItems(search, {
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
  }, [search]);

  const getItems = async query => {
    const res = await retrieveItems(query);
    setSearch(res);
  };

  return (
    <LocalStateProvider
      value={{
        // userLogin,
        // userLogout,
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

export { CartStateProvider, LocalStateContext, useInfos };

// cartOpen,
// toggleCart,
// openCart,
// closeCart,
// updateCart,
// cartItems,
