import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className='text-slate-300'>Modal</h1>
      <Button primary onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal showModal={showModal} onClose={handleClose}>
        <p>Click outside this area to close the modal message</p>
        <Button success onClick={handleClose}>
          I accept
        </Button>
      </Modal>
    </div>
  );
};

export default ModalPage;
