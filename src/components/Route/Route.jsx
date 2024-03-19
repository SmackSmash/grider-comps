import useNavigation from '../../hooks/useNavigation';
import PropTypes from 'prop-types';

const Route = ({ path, children }) => {
  const { location } = useNavigation();

  return path === location && children;
};

Route.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node
};

export default Route;
