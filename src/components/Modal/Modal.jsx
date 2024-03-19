import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ message, showModal, onClick }) => {
  return (
    showModal &&
    createPortal(
      <div
        onClick={onClick}
        className='fixed cursor-pointer bg-black/50 inset-0 w-full flex items-center justify-center'>
        <div className='bg-white p-8 cursor-default rounded' onClick={e => e.stopPropagation()}>
          {message}
        </div>
      </div>,
      document.body
    )
  );
};

Modal.propTypes = {
  message: PropTypes.string,
  showModal: PropTypes.bool,
  onClick: PropTypes.func
};

export default Modal;
