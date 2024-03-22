import Accordion from '../../components/Accordion/Accordion';

const accordionData = [
  {
    id: 'uovy7jzXAV',
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    content:
      'Nihil ea id unde, nesciunt asperiores deleniti ab illo neque molestiae aspernatur dicta quas? Eos quia optio corrupti placeat obcaecati quam autem fugit rem harum, incidunt similique nemo ab maxime, recusandae tempora.'
  },
  {
    id: 'k1rvytk8NV',
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    content:
      'Nihil ea id unde, nesciunt asperiores deleniti ab illo neque molestiae aspernatur dicta quas? Eos quia optio corrupti placeat obcaecati quam autem fugit rem harum, incidunt similique nemo ab maxime, recusandae tempora.'
  },
  {
    id: 'hTViTuYVYB',
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    content:
      'Nihil ea id unde, nesciunt asperiores deleniti ab illo neque molestiae aspernatur dicta quas? Eos quia optio corrupti placeat obcaecati quam autem fugit rem harum, incidunt similique nemo ab maxime, recusandae tempora.'
  },
  {
    id: 'bYH3Fy8mMS',
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    content:
      'Nihil ea id unde, nesciunt asperiores deleniti ab illo neque molestiae aspernatur dicta quas? Eos quia optio corrupti placeat obcaecati quam autem fugit rem harum, incidunt similique nemo ab maxime, recusandae tempora.'
  }
];

const AccordionPage = () => {
  return (
    <div className='w-full pr-6'>
      <h1 className='text-slate-300'>ACCORDION</h1>
      <Accordion data={accordionData} />
    </div>
  );
};

export default AccordionPage;
