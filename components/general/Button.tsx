import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

const Button = ({ text, type, onClick, classes }: ButtonProps) => {
//
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${classes} my-5 block mx-auto rounded-lg bg-indigo-500 text-sm font-medium transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 dark:border-white shadow-lg hover:-translate-y-0.5`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
