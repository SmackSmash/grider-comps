import Link from '../Link/Link';

const SideBar = () => {
  return (
    <div className='sidebar bg-slate-300 p-6 mr-6 flex flex-col'>
      <Link to='/accordion'>Accordion</Link>
      <Link to='/button'>Button</Link>
      <Link to='/dropdown'>Dropdown</Link>
      <Link to='/slider'>Slider</Link>
    </div>
  );
};

export default SideBar;
