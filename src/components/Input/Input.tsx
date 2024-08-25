import { ChangeEvent } from "react";
import "./style.scss";

export interface IInputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  inputWrapperClassName?: string;
  placeholder: string;
  type?: string;
}

const Input = ({
  value,
  onChange,
  inputClassName,
  inputWrapperClassName,
  placeholder,
  type = "text",
}: IInputProps) => {
  return (
    <div className={`input__wrapper ${inputWrapperClassName}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputClassName}`}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
