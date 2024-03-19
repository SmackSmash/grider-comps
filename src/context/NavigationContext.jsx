import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setLocation(window.location.pathname);

    window.addEventListener('popstate', handler);

    // Return cleanup as arrow function to avoid it running on initial load
    return () => window.removeEventListener('popstate', handler);
  }, []);

  return <NavigationContext.Provider value={{ location, setLocation }}>{children}</NavigationContext.Provider>;
};

NavigationContextProvider.propTypes = {
  children: PropTypes.node
};

export default NavigationContextProvider;
