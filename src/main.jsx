import './main.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavigationContextProvider from './context/NavigationContext';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <NavigationContextProvider>
    <App />
  </NavigationContextProvider>
);
