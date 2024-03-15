import { useState, useCallback } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const createOption = (label, value) => ({ label, value });

  const options = [
    createOption('Apple', 'apple'),
    createOption('Banana', 'banana'),
    createOption('Kiwi', 'kiwi'),
    createOption('Starfruit', 'starfruit'),
    createOption('Orange', 'orange')
  ];

  // useCallback not necessary but industry standard
  const handleSelect = useCallback(option => {
    setSelection(option);
  }, []);

  return (
    <>
      <h1 className='text-slate-300 flex'>DROPDOWN</h1>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </>
  );
};

export default DropdownPage;
