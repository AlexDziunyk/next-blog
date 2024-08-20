import { Editor, FloatingMenu } from "@tiptap/react";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import BubbleIconItem from "../BubbleMenu/components/BubbleIconItem";
import { useMyEditor } from "@/hooks/useMyEditor";
import { CiImageOn } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import BubbleSelectList from "../BubbleMenu/components/BubbleSelectList";
import Input from "@/components/Input/Input";

interface IFloatingMenu {
  editor: Editor;
}

const CustomFloatingMenu = ({ editor }: IFloatingMenu) => {
  const { handleYoutube, handleImage } = useMyEditor(editor);

  const imageRef = useRef<HTMLInputElement>(null);

  const [youtubeList, setYoutubeList] = useState<boolean>(false);
  const youtubeListRef = useRef<HTMLInputElement>(null);
  const [youtubeValue, setYoutubeValue] = useState<string>("");

  useEffect(() => {
    const handleClickYoutubeOutside = (event: MouseEvent) => {
      if (
        youtubeListRef.current &&
        !youtubeListRef.current.contains(event.target as Node)
      ) {
        setYoutubeList(false);
      }
    };

    document.addEventListener("mousedown", handleClickYoutubeOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickYoutubeOutside);
    };
  }, []);


  useEffect(() => {
    if (youtubeList === false) {
      setYoutubeValue("");
    }
  }, [youtubeList]);

  return (
    <FloatingMenu className="floating-menu" editor={editor}>
      <BubbleIconItem onClick={() => setYoutubeList(true)} Icon={FaYoutube} />
      <BubbleIconItem
        onClick={() => imageRef.current?.click()}
        Icon={CiImageOn}
      />
      <input
        onChange={(e) => handleImage(e)}
        accept="image/*"
        ref={imageRef}
        hidden
        type="file"
      />
      {youtubeList && !editor.isActive("link") && (
          <BubbleSelectList>
          <div ref={youtubeListRef} className="link__wrapper">
              <Input
                value={youtubeValue}
                onChange={(e) => setYoutubeValue(e.target.value)}
                placeholder="Write youtube link here"
              />
              <button
                disabled={youtubeValue.length === 0}
                type="button"
                onClick={() => {
                  handleYoutube(youtubeValue);
                  setYoutubeList(false);
                }}
                className="link__button_save"
              >
                Save Link
              </button>
            </div>
          </BubbleSelectList>
        )}
    </FloatingMenu>
  );
};

export default CustomFloatingMenu;
