// import { useState } from 'react';
import { useReducer } from 'react';
import Button from '../../components/Button/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'set_addition':
      return { ...state, addition: action.payload };
    case 'add_many':
      return { count: state.count + state.addition, addition: '' };
    default:
      return state;
  }
};

const CounterPage = () => {
  // const [count, setCount] = useState(0);
  // const [addition, setAddition] = useState('');
  const [state, dispatch] = useReducer(reducer, { count: 0, addition: '' });

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({ type: 'decrement' });
  };

  const handleChange = e => {
    // setAddition(e.target.value);
    dispatch({ type: 'set_addition', payload: Number(e.target.value) });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setAddition('');
    // setCount(count + Number(addition));
    dispatch({ type: 'add_many' });
  };

  return (
    <div>
      <h1 className='text-slate-300 flex'>COUNTER</h1>
      <h2 className='text-slate-300 text-6xl'>{state.count}</h2>
      <div className='flex row gap-2'>
        <Button danger onClick={handleDecrement}>
          Decrement
        </Button>
        <Button success onClick={handleIncrement}>
          Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type='number' className='p-2' placeholder='Add a lot' value={state.addition} onChange={handleChange} />
        <Button type='submit' primary>
          {state.addition ? `Add ${state.addition}` : `Add`}
        </Button>
      </form>
    </div>
  );
};

export default CounterPage;
