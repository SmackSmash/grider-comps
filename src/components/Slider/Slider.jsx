import PropTypes from 'prop-types';

const Slider = ({ value, onChange }) => {
  return (
    <>
      <h1 className='text-slate-300'>Select age</h1>
      <input type='range' min='0' max='120' value={value} onChange={onChange} />
      <h1 className='text-slate-300'>{value}</h1>
    </>
  );
};

Slider.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Slider;
