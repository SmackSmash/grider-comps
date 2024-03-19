import HomePage from './pages/HomePage/HomePage';
import ButtonPage from './pages/ButtonPage/ButtonPage';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import DropdownPage from './pages/DropdownPage/DropdownPage';
import SliderPage from './pages/SliderPage/SliderPage';
import SideBar from './components/SideBar/SideBar';
import Route from './components/Route/Route';

const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Route path='/'>
        <HomePage />
      </Route>
      <Route path='/accordion'>
        <AccordionPage />
      </Route>
      <Route path='/button'>
        <ButtonPage />
      </Route>
      <Route path='/dropdown'>
        <DropdownPage />
      </Route>
      <Route path='/slider'>
        <SliderPage />
      </Route>
    </div>
  );
};

export default App;
