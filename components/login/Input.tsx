import React, { ChangeEvent } from "react";

// declare module "react" {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     // extends React's HTMLAttributes
//     cols?: number;
//     rows?: number;
//   }
// }

type InputProps = {
  type: string;
  name: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  accept?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  classes: string;
};

const Input = ({
  type,
  name,
  id,
  onChange,
  value,
  onBlur,
  maxLength,
  // cols,
  // rows,
  accept,
  placeholder,
  classes,
}: InputProps) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        maxLength={maxLength}
        className={classes}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        accept={accept}
      />
    </>
  );
};

export default Input;
