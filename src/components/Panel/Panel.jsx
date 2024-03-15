import PropTypes from 'prop-types';
import classNames from 'classnames';

// ...rest will pull through all added props like onClick. Make sure to assign them
// to the div in the jsx
const Panel = ({ children, className, ...rest }) => {
  const panelClasses = classNames(
    'text-slate-300 bg-slate-800 hover:bg-slate-700 cursor-pointer p-2 m-2 w-80 rounded transition-all',
    className
  );

  return (
    <div className={panelClasses} {...rest}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Panel;
