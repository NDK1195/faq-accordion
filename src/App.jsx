import Accordion from './Accordion';
import iconStar from './assets/icon-star.svg';
import { faqs } from './faqs';

function App() {
  return (
    <>
      <div className='bg-mobile md:bg-desktop h-[30%] md:h-[35%] fixed top-0 w-full'></div>
      <div className='bg-light-pink h-screen flex items-center justify-center'>
        <div className='mx-6 bg-white z-10 rounded-lg md:rounded-2xl min-w-[327px] max-w-[600px] shadow-custom-shadow p-6 md:p-10 flex flex-col gap-6 md:gap-8'>
          <div className='flex items-center gap-6'>
            <img src={iconStar} alt='icon star' className='size-6 md:size-10' />
            <h1 className='text-dark-purple font-bold text-[32px] md:text-[56px]'>
              FAQs
            </h1>
          </div>
          <div className='flex flex-col gap-5 md:gap-6'>
            {faqs.map((faq, index) => (
              <Accordion
                key={faq.id}
                title={faq.title}
                content={faq.content}
                lastChild={index === faqs.length - 1}
              />
            ))}
          </div>
        </div>
        {/* Box */}
      </div>
    </>
  );
}
export default App;
