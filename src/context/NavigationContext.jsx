import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
  const [location, setLocation] = useState('hello there');

  return <NavigationContext.Provider value={{ location, setLocation }}>{children}</NavigationContext.Provider>;
};

NavigationContextProvider.propTypes = {
  children: PropTypes.node
};

export default NavigationContextProvider;
