import './style.scss';

interface ICategoryItemProps {
  text: string;
  categoryTagType?: string;
}

export const categoryTagTypes = {
  NORMAL: "normal_tag",
  INVERT: "invert_tag"
};

const CategoryTag = ({text, categoryTagType = categoryTagTypes.NORMAL}: ICategoryItemProps) => {
  return (
    <div className={`category-tag ${categoryTagType}`}>
      {text}
    </div>
  )
}

export default CategoryTag