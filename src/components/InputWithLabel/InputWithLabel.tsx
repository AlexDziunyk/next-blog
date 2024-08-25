import Input, { IInputProps } from "../Input/Input";
import "./style.scss";

interface InputWithLabel extends IInputProps {
  labelText: string;
}

const InputWithLabel = ({ labelText, ...props }: InputWithLabel) => {
  return (
    <div className="input-with-label">
      <span className="label">{labelText}</span>
      <Input {...props} />
    </div>
  );
};

export default InputWithLabel;
