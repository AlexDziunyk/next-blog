import { useRef, useState } from "react";
import { TiImageOutline } from "react-icons/ti";
import { downloadFile } from "@/utils/downloadFile";
import { IoClose } from "react-icons/io5";
import "./style.scss";

const Cover = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleClearImage = () => {
    setImageUrl("");
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleImageClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleDownloadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    downloadFile(e, (reader) => {
      setImageUrl(reader.result as string);
    });
  };

  return (
    <div className="cover">
      {imageUrl ? (
        <div className="cover__image__wrapper">
          <IoClose onClick={handleClearImage} size={30} className="cross" />
          <img
            onClick={handleImageClick}
            className="cover__image"
            src={imageUrl}
          ></img>
        </div>
      ) : (
        <div onClick={handleImageClick} className="cover__add">
          <TiImageOutline size={40} />
          <p className="text">Add a cover</p>
        </div>
      )}
      <input
        type="file"
        onChange={(e) => handleDownloadImage(e)}
        accept="image/*"
        ref={inputRef}
        hidden
      ></input>
    </div>
  );
};

export default Cover;
