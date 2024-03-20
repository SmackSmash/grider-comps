import PropTypes from 'prop-types';

const Table = ({ data }) => {
  return (
    <div>
      {data.map(({ name, color, score }, index) => (
        <p key={index} className='text-slate-300'>
          {name} {color} {score}
        </p>
      ))}
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array
};

export default Table;
