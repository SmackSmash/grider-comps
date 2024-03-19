import Modal from '../../components/Modal/Modal';

const ModalPage = () => {
  return (
    <div>
      <h1 className='text-slate-300'>Modal</h1>
      <Modal message='Click outside this area to close the modal message' />
    </div>
  );
};

export default ModalPage;
