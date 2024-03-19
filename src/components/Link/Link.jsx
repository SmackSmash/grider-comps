import useNavigation from '../../hooks/useNavigation';
import PropTypes from 'prop-types';

const Link = ({ children, to, ...rest }) => {
  const { navigate } = useNavigation();

  const handleClick = e => {
    e.preventDefault();
    e.ctrlKey || e.metaKey ? window.open(window.location.origin + to, '_blank') : navigate(to);
  };

  return (
    <a className='text-blue-800 underline' href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
};

export default Link;
