import './style.scss';

interface IButtonProps {
  text: string,
  buttonClassName?: string,
  buttonType?: string
};


export const buttonTypes = {
  NORMAL: "normal__type",
  INVERT: "invert__type"
}

const Button = ({text, buttonClassName, buttonType = buttonTypes.NORMAL}: IButtonProps) => {
  return (
    <button className={`button ${buttonType} ${buttonClassName}`}>{text}</button>
  )
}

export default Button;