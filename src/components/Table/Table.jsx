import PropTypes from 'prop-types';

const Table = ({ data }) => {
  return (
    <table className='text-slate-300'>
      <thead>
        {Object.keys(data[0]).map(key => (
          <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
        ))}
      </thead>
      <tbody>
        {data.map(({ name, color, score }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array
};

export default Table;
