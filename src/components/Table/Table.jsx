import PropTypes from 'prop-types';

const Table = ({ data, config }) => {
  return (
    <table className='text-slate-300 table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {config.map(({ label }) => (
            <th className='p-3' key={label}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ fruit, color, score }) => (
          <tr className='border-b' key={fruit}>
            <td className='p-3'>{fruit}</td>
            <td className='p-3'>
              <div className={`w-6 h-6 ${color}`}></div>
            </td>
            <td className='p-3'>{score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  config: PropTypes.arrayOf(PropTypes.object)
};

export default Table;
