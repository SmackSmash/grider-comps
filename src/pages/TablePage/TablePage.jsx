import { useState } from 'react';
import Table from '../../components/Table/Table';

const createData = (name, color, score) => ({ name, color, score });

const TablePage = () => {
  const [data, setData] = useState([
    createData('Orange', 'bg-orange-500', 5),
    createData('Apricot', 'bg-amber-500', 3),
    createData('Apple', 'bg-red-600', 2),
    createData('Banana', 'bg-yellow-500', 1),
    createData('Lime', 'bg-green-500', 4)
  ]);

  const config = [
    {
      label: 'Fruit',
      render: fruit => fruit.name,
      sort: () => setData([...data].sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)))
    },
    { label: 'Color', render: fruit => <div className={`w-6 h-6 ${fruit.color}`}></div> },
    { label: 'Score', render: fruit => fruit.score, sort: () => setData([...data].sort((a, b) => a.score - b.score)) }
  ];

  return (
    <div>
      <h1 className='text-slate-300'>TABLE</h1>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
