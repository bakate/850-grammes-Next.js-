import React, { createContext } from 'react';

const Apppli = createContext();

const ContextProvider = ({ children }) => {
  const name = () => {
    console.log('helmlllggfdgfgp$l');
  };
  const [login, setLogin] = useState(true);
  const [signin, setSignin] = useState(false);

  const signup = () => {
    setSignin(true);
  };

  return <Apppli.Provider value={{ name, signin }}>{children}</Apppli.Provider>;
};

export default ContextProvider;
