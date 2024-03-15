import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from 'react-icons/md';

const Accordion = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = clickedIndex =>
    clickedIndex === expandedIndex ? setExpandedIndex(null) : setExpandedIndex(clickedIndex);

  return data ? (
    <div className='accordion'>
      {data.map(({ id, label, content }, index) => (
        <div key={id}>
          <h3
            className='bg-slate-300 border-b text-slate-900 cursor-pointer h-16 p-3 flex items-center justify-between'
            onClick={() => handleClick(index)}>
            {label}
            {index === expandedIndex ? (
              <MdKeyboardArrowUp className='w-10 h-10' />
            ) : (
              <MdKeyboardArrowRight className='w-10 h-10' />
            )}
          </h3>
          {index === expandedIndex && <p className='text-slate-300 p-3'>{content}</p>}
        </div>
      ))}
    </div>
  ) : (
    <p className='text-slate-300'>No data</p>
  );
};

Accordion.propTypes = {
  data: PropTypes.array
};

export default Accordion;
