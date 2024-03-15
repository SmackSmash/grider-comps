import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, primary, secondary, success, warning, danger, outline, rounded, ...rest }) => {
  const btnClass = classNames(
    'min-w-48 font-semibold uppercase p-3 my-2 border-4 opacity-90 hover:opacity-100 flex items-center justify-center',
    {
      'bg-blue-700 border-blue-500 text-white': primary,
      'bg-slate-700 border-slate-500 text-white': secondary,
      'bg-green-700 border-green-500 text-white': success,
      'bg-yellow-700 border-yellow-500 text-white': warning,
      'bg-red-700 border-red-500 text-white': danger,
      '!bg-white': outline,
      'rounded-full': rounded,
      '!text-blue-700': primary && outline,
      '!text-slate-700': secondary && outline,
      '!text-green-700': success && outline,
      '!text-yellow-700': warning && outline,
      '!text-red-700': danger && outline
    }
  );

  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
    return count > 1 ? new Error('Only one of primary, secondary, success, warning, danger can be true') : null;
  }
};

export default Button;
