import ButtonPage from './pages/ButtonPage/ButtonPage';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import SideBar from './components/SideBar/SideBar';
import DropdownPage from './pages/DropdownPage/DropdownPage';
import SliderPage from './pages/SliderPage/SliderPage';

const App = () => {
  document.title = window.location.pathname[1].toUpperCase() + window.location.pathname.slice(2) + ' Page';

  return (
    <div className='flex'>
      <SideBar />
      <AccordionPage />
      <ButtonPage />
      <DropdownPage />
      <SliderPage />
    </div>
  );
};

export default App;
