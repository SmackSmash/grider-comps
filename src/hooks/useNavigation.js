import { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';

const useNavigation = () => useContext(NavigationContext);

export default useNavigation;
