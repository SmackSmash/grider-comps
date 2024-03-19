import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1 className='text-slate-300'>Modal</h1>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      <Modal showModal={showModal} onClick={handleClick} message='Click outside this area to close the modal message' />
    </div>
  );
};

export default ModalPage;
