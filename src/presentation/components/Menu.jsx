import {useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
export const Menu = ({ isOpen, handleMenuToggle }) => {
  const menuRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleMenuToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Remove o event listener ao desmontar o componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleMenuToggle]);

  return (
    <div ref={menuRef} className='z-[99] py-4 md:hidden'>
      <button
        className="relative group"
        onClick={() => handleMenuToggle(!isOpen)}
      >
        <div className="relative flex overflow-hidden items-center justify-center w-[35px] h-[35px] transform transition-all">
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
          >
            <div className={`bg-yellow-lemonade h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10' : 'translate-x-0'}`}></div>
            <div className={`bg-yellow-lemonade h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'translate-x-10 delay-75' : 'translate-x-0 delay-75'}`}></div>
            <div className={`bg-yellow-lemonade h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10 delay-150' : 'translate-x-0 delay-150'}`}></div>
          </div>
          <div
            className={`absolute items-center justify-between transform transition-all duration-300 ${isOpen ? 'top-0 translate-x-0 w-12' : '-translate-x-12 w-0'} flex`}
          >
            <div className={`absolute bg-yellow-lemonade h-[2px] w-5 transform transition-all duration-300 ${isOpen ? 'rotate-45 left-3.5 top-4 delay-300' : 'rotate-0 left-0'} `}></div>
            <div className={`absolute bg-yellow-lemonade h-[2px] w-5 transform transition-all duration-300 ${isOpen ? '-rotate-45 left-3.5 top-4 delay-300' : '-rotate-0 left-0'} `}></div>
          </div>
        </div>
      </button>
    </div>
  );
};
