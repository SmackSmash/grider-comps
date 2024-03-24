import { useState } from 'react';
import Button from '../../components/Button/Button';

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [addition, setAddition] = useState('');

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  const handleChange = e => {
    setAddition(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCount(count + Number(addition));
  };

  return (
    <div>
      <h1 className='text-slate-300 flex'>COUNTER</h1>
      <h2 className='text-slate-300 text-6xl'>{count}</h2>
      <Button success onClick={handleIncrement}>
        Increment
      </Button>
      <Button danger onClick={handleDecrement}>
        Decrement
      </Button>
      <form onSubmit={handleSubmit}>
        <input type='number' value={addition} onChange={handleChange} />
        <Button type='submit' primary>
          {addition ? `Add ${addition}` : `Add`}
        </Button>
      </form>
    </div>
  );
};

export default CounterPage;
