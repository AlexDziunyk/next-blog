import { formaDateDistance } from "@/utils/dates";
import CategoryTag from "../CategoryTag/CategoryTag";
import "./style.scss";
import Image from "next/image";

interface IBlogItemProps {
  title: string;
  image: string;
  username: string;
  date: string;
  avatar: string;
  tags: string[];
}

const BlogItem = ({
  title,
  image,
  username,
  date,
  avatar,
  tags,
}: IBlogItemProps) => {
  return (
    <div className="blog-item__wrapper">
      <div className="blog-item">
        <div className="image__wrapper">
          <Image src={image} alt="Picture of the blog" fill objectFit="cover" />
        </div>
        {tags && tags.map((item) => <CategoryTag text={item} />)}
        <h2 className="title">{title}</h2>
        <div className="info">
          <div className="avatar__wrapper">
            <Image
              src={avatar}
              alt="Picture of the avatar"
              fill
              objectFit="cover"
            />
          </div>
          <p className="username">{username}</p>
          <p className="date">{formaDateDistance(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
