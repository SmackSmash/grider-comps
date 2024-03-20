import Table from '../../components/Table/Table';

const createData = (name, color, score) => ({ name, color, score });

const data = [
  createData('Orange', 'bg-orange', 5),
  createData('Apple', 'bg-red-500', 3),
  createData('Banana', 'bg-yellow-500', 1),
  createData('Lime', 'bg-green-500', 4)
];

const TablePage = () => {
  return (
    <div>
      <h1 className='text-slate-300'>TABLE</h1>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
