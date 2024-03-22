import { useState } from 'react';
import Table from '../../components/Table/Table';

const createFruit = (name, color, score) => ({ name, color, score });

const TablePage = () => {
  const [data, setData] = useState([
    createFruit('Orange', 'bg-orange-500', 5),
    createFruit('Apricot', 'bg-amber-500', 3),
    createFruit('Lemon', 'bg-yellow-300', 6),
    createFruit('Apple', 'bg-red-600', 2),
    createFruit('Banana', 'bg-yellow-500', 1),
    createFruit('Lime', 'bg-green-500', 4),
    createFruit('Blueberry', 'bg-indigo-950', 7)
  ]);

  const [sorted, setSorted] = useState(false);

  const config = [
    {
      label: 'Fruit',
      render: fruit => fruit.name,
      sort: () =>
        setData(
          [...data].sort((a, b) => {
            switch (sorted) {
              case 'alphabetical-ascending':
                setSorted('alphabetical-descending');
                return b.name.localeCompare(a.name);
              case 'alphabetical-descending':
              default:
                setSorted('alphabetical-ascending');
                return a.name.localeCompare(b.name);
            }
          })
        )
    },
    { label: 'Color', render: fruit => <div className={`w-6 h-6 border border-slate-500 ${fruit.color}`}></div> },
    {
      label: 'Score',
      render: fruit => fruit.score,
      sort: () =>
        setData(
          [...data].sort((a, b) => {
            switch (sorted) {
              case 'numerical-ascending':
                setSorted('numerical-descending');
                return b.score - a.score;
              case 'numerical-descending':
              default:
                setSorted('numerical-ascending');
                return a.score - b.score;
            }
          })
        )
    }
  ];

  return (
    <div>
      <h1 className='text-slate-300'>TABLE</h1>
      <Table data={data} config={config} />
      <p className='text-slate-300'>{sorted}</p>
    </div>
  );
};

export default TablePage;
