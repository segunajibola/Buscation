import React from 'react';

const Button = ({ text, type, handleClick, classes }) => {
  return (
    <>
      <button
        onClick={handleClick}
        type={type}
        className={` ${classes} mt-1 inline-block rounded bg-indigo-500 py-2 px-2 font-medium text-white transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600 dark:text-white`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
