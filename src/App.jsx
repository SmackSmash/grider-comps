import { useContext } from 'react';
import { NavigationContext } from './context/NavigationContext';
import ButtonPage from './pages/ButtonPage/ButtonPage';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import SideBar from './components/SideBar/SideBar';
import DropdownPage from './pages/DropdownPage/DropdownPage';
import SliderPage from './pages/SliderPage/SliderPage';

const App = () => {
  const { location } = useContext(NavigationContext);

  return (
    <div className='flex'>
      <SideBar />
      {location === '/' && <h1 className='text-slate-300'>Selct an option from the sidebar</h1>}
      {location === '/accordion' && <AccordionPage />}
      {location === '/button' && <ButtonPage />}
      {location === '/dropdown' && <DropdownPage />}
      {location === '/slider' && <SliderPage />}
    </div>
  );
};

export default App;
