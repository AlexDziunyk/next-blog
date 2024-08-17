import Image from "next/image";
import "./style.scss";
import CategoryTag, { categoryTagTypes } from "../CategoryTag/CategoryTag";

interface IBigBlogProps {
  image: string;
  tags: string[];
  title: string;
  avatar: string;
  username: string;
  date: string;
}

const BigBlog = ({
  image,
  tags,
  title,
  avatar,
  username,
  date,
}: IBigBlogProps) => {
  return (
    <div className="big-blog__wrapper">
      <div className="big-blog">
        <div className="image__wrapper">
          <Image
            src={image}
            alt="Picture of the blog"
            quality={100}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
        <div className="info">
          {tags &&
            tags.map((item) => (
              <CategoryTag
                text={item}
                categoryTagType={categoryTagTypes.INVERT}
              />
            ))}
          <h2>{title}</h2>
          <div className="author">
            <Image
              src={avatar}
              alt={"avatar"}
              width={32}
              height={32}
            />
            <span className="username">{username}</span>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlog;
