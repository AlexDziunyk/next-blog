import Image from "next/image";
import "./style.scss";
import CategoryTag, { categoryTagTypes } from "../CategoryTag/CategoryTag";

const BigBlog = () => {
  return (
    <div className="big-blog__wrapper">
      <div className="big-blog">
        <div className="image__wrapper">
          <Image
            src={"/images/bigblog.png"}
            alt="Picture of the blog"
            quality={100}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
        <div className="info">
          <CategoryTag
            text="technology"
            categoryTagType={categoryTagTypes.INVERT}
          />
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <div className="author">
            <Image
              src="/images/avatar.png"
              alt={"avatar"}
              width={32}
              height={32}
            />
            <span className="username">Jason Francisco</span>
            <span className="date">August 20, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlog;
