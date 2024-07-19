import { useState } from 'react';
import iconMinus from './assets/icon-minus.svg';
import iconPlus from './assets/icon-plus.svg';
import PropTypes from 'prop-types';

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  lastChild: PropTypes.bool,
};

function Accordion({ title, content, lastChild = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`pb-5 md:pb-6 ${
        lastChild ? '' : 'border-b-[1px] border-light-pink'
      } flex flex-col gap-6`}
    >
      <div
        className='flex justify-between items-center gap-6 transition-all'
        onClick={() => setIsOpen(isOpen => !isOpen)}
      >
        <h2 className='cursor-pointer text-dark-purple font-semibold md:text-[18px] hover:text-[#ad28eb]'>
          {title}
        </h2>
        <img
          src={isOpen ? iconMinus : iconPlus}
          alt='icon'
          className='size-[30px] cursor-pointer'
        />
      </div>

      <div
        className={`${
          isOpen ? 'max-h-60' : ''
        } transition-all duration-500 overflow-hidden max-h-0`}
      >
        <p className={`text-grayish-purple text-base`}>{content}</p>
      </div>
    </div>
  );
}
export default Accordion;
