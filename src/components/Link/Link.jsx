import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import PropTypes from 'prop-types';

const Link = ({ children, to, ...rest }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = e => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
};

export default Link;
