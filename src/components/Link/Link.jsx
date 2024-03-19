import PropTypes from 'prop-types';

const Link = ({ children, to, ...rest }) => {
  const handleClick = e => {
    e.preventDefault();
    window.history.pushState({}, '', to);
  };

  return (
    <a href={to} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
};

export default Link;
