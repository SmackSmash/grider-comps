import ButtonPage from './pages/ButtonPage/ButtonPage';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import SideBar from './components/SideBar/SideBar';
import DropdownPage from './pages/DropdownPage/DropdownPage';
import SliderPage from './pages/SliderPage/SliderPage';

const App = () => {
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
