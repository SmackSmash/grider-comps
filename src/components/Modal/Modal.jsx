import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Modal = ({ message }) => {
  const [portalVisible, setPortalVisible] = useState(false);

  const handleClick = () => {
    setPortalVisible(!portalVisible);
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {portalVisible &&
        createPortal(
          <div
            onClick={handleClick}
            className='fixed cursor-pointer bg-black/50 top-0 left-0 w-full h-full flex items-center justify-center'>
            <div className='bg-white p-8 cursor-default' onClick={e => e.stopPropagation()}>
              {message}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string
};

export default Modal;
