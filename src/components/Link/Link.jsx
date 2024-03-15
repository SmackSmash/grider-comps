import PropTypes from 'prop-types';

const Link = ({ children, to, ...rest }) => {
  const handleClick = ({ target }) => {
    console.log(target, document.location.pathname);
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
