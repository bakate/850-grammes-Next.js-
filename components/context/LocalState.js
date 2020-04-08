import { createContext, useState, useContext } from 'react';
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
  const [user, setUser] = useState();

  // const userLogin = person => {
  //   setUserFromLS(person);
  //   return localStorage.setItem('user', JSON.stringify(person));
  // };

  // const userLogout = () => {
  //   setUserFromLS({ username: null, token: null });
  //   return localStorage.removeItem('user');
  // };

  // function toggleCart() {
  //   setCartOpen(!cartOpen);
  // }

  // function closeCart() {
  //   setCartOpen(false);
  // }
  // function updateCart() {
  //   setCartItems(prev => prev + 1);
  // }

  // function openCart() {
  //   setCartOpen(true);
  // }

  return (
    <LocalStateProvider
      value={{
        // userLogin,
        // userLogout,
        // userFromLS,
        social,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function usePerson() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, LocalStateContext, usePerson };

// cartOpen,
// toggleCart,
// openCart,
// closeCart,
// updateCart,
// cartItems,
