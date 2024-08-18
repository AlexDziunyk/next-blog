import { FaCheck } from "react-icons/fa6";

interface ITextColorItemProps {
  onClick: () => void;
  color?: string;
  background?: string;
  colorName: string;
  active?: boolean;
}

const TextColorItem = ({ color, colorName, active, onClick, background }: ITextColorItemProps) => {
  return (
    <div onClick={onClick} className="text-color-item">
      <div className="value__wrapper">
        <div style={{backgroundColor: background}} className="letter__wrapper">
          <span style={{color}}>A</span>
        </div>
        <p>{colorName}</p>
      </div>
      {active && <FaCheck />}
    </div>
  );
};

export default TextColorItem;
