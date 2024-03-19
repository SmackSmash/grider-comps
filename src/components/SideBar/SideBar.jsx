import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';
import Link from '../Link/Link';

const SideBar = () => {
  const { location } = useContext(NavigationContext);
  return (
    <div className='sidebar bg-slate-300 p-6 mr-6 flex flex-col'>
      <h1>{location}</h1>
      <Link to='/accordion'>Accordion</Link>
      <Link to='/button'>Button</Link>
      <Link to='/dropdown'>Dropdown</Link>
      <Link to='/slider'>Slider</Link>
    </div>
  );
};

export default SideBar;
