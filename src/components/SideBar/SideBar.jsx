import Link from '../Link/Link';

const createLink = (label, path) => ({ label, path });

const links = [
  createLink('Accordion', '/accordion'),
  createLink('Button', '/button'),
  createLink('Dropdown', '/dropdown'),
  createLink('Slider', '/slider'),
  createLink('Modal', '/modal'),
  createLink('Table', '/table'),
  createLink('Counter', '/counter')
];

const SideBar = () => {
  return (
    <div className='sidebar bg-slate-300 p-6 mr-6 flex flex-col'>
      {links.map(({ label, path }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
