import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ children, showModal, onClose }) => {
  return (
    showModal &&
    createPortal(
      <div
        onClick={onClose}
        className='fixed cursor-pointer bg-black/50 inset-0 w-full flex items-center justify-center'>
        <div className='bg-white p-8 cursor-default rounded' onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.querySelector('.modal-container')
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  showModal: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
