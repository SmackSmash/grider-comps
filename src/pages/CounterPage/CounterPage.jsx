import { useReducer } from 'react';
import Button from '../../components/Button/Button';

const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_ADDITION: 'SET_ADDITION',
  ADD_MANY: 'ADD_MANY'
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1 };
    case types.DECREMENT:
      return { ...state, count: state.count - 1 };
    case types.SET_ADDITION:
      return { ...state, addition: action.payload };
    case types.ADD_MANY:
      return { ...state, count: state.count + state.addition, addition: '' };
    default:
      return state;
  }
};

const CounterPage = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, addition: '' });

  const handleIncrement = () => dispatch({ type: types.INCREMENT });

  const handleDecrement = () => dispatch({ type: types.DECREMENT });

  const handleChange = e => dispatch({ type: types.SET_ADDITION, payload: Number(e.target.value) });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: types.ADD_MANY });
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
