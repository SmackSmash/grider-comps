import { useState, useCallback } from 'react';
import Slider from '../../components/Slider/Slider';

const SliderPage = () => {
  const [age, setAge] = useState('20');

  const handleChange = useCallback(({ target: { value } }) => {
    setAge(value);
  }, []);

  return (
    <div>
      <h1 className='text-slate-300'>SLIDER</h1>
      <Slider value={age} onChange={handleChange} />;
    </div>
  );
};

export default SliderPage;
