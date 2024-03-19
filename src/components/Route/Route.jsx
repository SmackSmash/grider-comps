import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import PropTypes from 'prop-types';

const Route = ({ path, children }) => {
  const { location } = useContext(NavigationContext);

  return path === location && children;
};

Route.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node
};

export default Route;
