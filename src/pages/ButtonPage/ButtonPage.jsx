import Button from '../../components/Button/Button';
import { MdCheckCircleOutline, MdOutlineWarningAmber, MdOutlineDangerous } from 'react-icons/md';

const ButtonPage = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div className='app p-4'>
      <h1 className='text-slate-300'>BUTTONS</h1>
      <div>
        <Button primary rounded onClick={handleClick}>
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>Click me too</Button>
      </div>
      <div>
        <Button success>
          <MdCheckCircleOutline />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <MdOutlineWarningAmber />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <MdOutlineDangerous />
          Danger!
        </Button>
      </div>
      <div>
        <Button primary outline>
          Click me
        </Button>
      </div>
      <div>
        <Button warning rounded outline>
          Click me
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
