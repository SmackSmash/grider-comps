import PropTypes from 'prop-types';
import { LiaSortSolid } from 'react-icons/lia';

const Table = ({ data, config }) => {
  return (
    <table className='text-slate-300 table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {config.map(({ label, sort, header }) =>
            header ? (
              header
            ) : (
              <th className='p-3' key={label}>
                {sort && <LiaSortSolid onClick={sort} className='inline-block cursor-pointer' />}
                {label}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((fruit, index) => (
          <tr className='border-b' key={index}>
            {config.map(({ render }, index) => (
              <td key={index} className='p-3'>
                {render(fruit)}
              </td>
            ))}
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
