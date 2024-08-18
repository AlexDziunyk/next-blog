import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

interface IListIconItemProps {
  active?: boolean;
  name: string;
  Icon: IconType;
  onClick: () => void;
}

const ListIconItem = ({ active, name, Icon, onClick }: IListIconItemProps) => {
  return (
    <div onClick={onClick} className="text-color-item">
      <div className="value__wrapper">
        <div className="letter__wrapper">
          <Icon />
        </div>
        <p>{name}</p>
      </div>
      {active && <FaCheck />}
    </div>
  );
};

export default ListIconItem;
