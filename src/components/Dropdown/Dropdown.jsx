import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import Panel from '../Panel/Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Set up blank reference, got to start of jsx...
  const dropdown = useRef();

  // Adds and removes event listener on component mount/dismount
  // using useEffect 'clean up' function returned from useEffect
  useEffect(() => {
    const handler = ({ target }) => {
      // Check for existence of the element in case of dismount
      if (!dropdown.current) return;
      // Close dropdown if we're clicking outside of it
      if (!dropdown.current.contains(target)) setIsOpen(false);
    };

    document.addEventListener('click', handler, true);

    return document.removeEventListener('click', handler);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setIsOpen(false);
    onChange(option);
  };

  // Question mark syntax on selection (line 45) is a more concise way to perform
  // conditional rendering via a psuedo-terniary expression. If you try to check
  // whether selection is truthy with the 'AND' 'OR' operators you will get an error
  // but by adding the question mark it will evaluate to a boolean instead.
  return (
    // Assign reference to dropdown menu
    <div className='dropdown' ref={dropdown}>
      <Panel
        className='cursor-pointer flex items-center justify-between border-b border-slate-700 bg-slate-600'
        onClick={handleClick}>
        {value?.label || 'Select an option'}
        {isOpen ? <MdKeyboardArrowUp className='w-6 h-6 ml-3' /> : <MdKeyboardArrowDown className='w-6 h-6 ml-3' />}
      </Panel>
      {isOpen &&
        options.map(option => (
          <Panel key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
          </Panel>
        ))}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default Dropdown;
