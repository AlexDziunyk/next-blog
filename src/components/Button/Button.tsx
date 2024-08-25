import "./style.scss";

interface IButtonProps {
  children: React.ReactNode;
  buttonClassName?: string;
  buttonType?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export const buttonTypes = {
  NORMAL: "normal__type",
  INVERT: "invert__type",
};

const Button = ({
  children,
  onClick,
  buttonClassName,
  buttonType = buttonTypes.NORMAL,
  type = "button",
  ...props
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${buttonType} ${buttonClassName}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
