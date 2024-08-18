import { BubbleMenu, Editor } from "@tiptap/react";
import BubbleIconItem from "./components/BubbleIconItem";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import BubbleSelectList from "./components/BubbleSelectList";
import Input from "@/components/Input/Input";
import BubbleIconList from "./components/BubbleIconList";
import { useEffect, useRef, useState } from "react";
import { BiFontColor } from "react-icons/bi";
import TextColorItem from "./components/TextColorItem";
import { backgroundsArr, colorsArr, IColorObj } from "@/utils/colors";
import "./style.scss";

interface IBubbleMenuProps {
  editor: Editor;
}

const CustomBubbleMenu = ({ editor }: IBubbleMenuProps) => {
  const [linkList, setLinkList] = useState<boolean>(false);
  const linkListRef = useRef<HTMLInputElement>(null);
  const [linkValue, setLinkValue] = useState<string>("");

  const [colorList, setColorList] = useState<boolean>(false);
  const colorListRef = useRef<HTMLInputElement>(null);

  const handleBold = () => {
    editor.chain().focus().toggleBold().run();
  };

  const handleItalic = () => {
    editor.chain().focus().toggleItalic().run();
  };

  const handleUnderline = () => {
    editor.chain().focus().toggleUnderline().run();
  };

  const handleLineThrough = () => {
    editor.chain().focus().toggleStrike().run();
  };

  const handleCode = () => {
    editor.chain().focus().toggleCode().run();
  };

  const handleSaveLink = () => {
    editor.chain().focus().setLink({ href: linkValue }).run();
    setLinkList(false);
  };

  const handleLink = () => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
    } else {
      setLinkList(true);
    }
  };

  const handleOpenColorList = () => {
    setColorList(true);
  };

  const handleColor = (color: string, index: number) => {
    if (index === 0) {
      editor.chain().focus().unsetColor().run();
    } else {
      editor.chain().focus().setColor(color).run();
    }
    setColorList(false);
  };

  const handleHighlight = (color: string, index: number) => {
    if (index === 0) {
      editor.chain().focus().unsetHighlight().run();
    } else {
      editor.chain().focus().toggleHighlight({ color }).run();
    }
    setColorList(false);
  };

  useEffect(() => {
    const handleClickLinkOutSide = (event: MouseEvent) => {
      if (
        linkListRef.current &&
        !linkListRef.current.contains(event.target as Node)
      ) {
        setLinkList(false);
        setLinkValue("");
      }
    };

    const handleClickColorsOutSide = (event: MouseEvent) => {
      if (
        colorListRef.current &&
        !colorListRef.current.contains(event.target as Node)
      ) {
        setColorList(false);
      }
    };

    document.addEventListener("mousedown", handleClickLinkOutSide);
    document.addEventListener("mousedown", handleClickColorsOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickLinkOutSide);
      document.addEventListener("mousedown", handleClickColorsOutSide);
    };
  }, [linkListRef]);

  useEffect(() => {
    if (linkList === false) {
      setLinkValue("");
    }
  }, [linkList]);

  return (
    <div className="bubble-menu__wrapper">
      <BubbleMenu
        className="bubble-menu"
        editor={editor}
        tippyOptions={{ duration: 100 }}
      >
        <BubbleIconItem
          active={editor.isActive("bold")}
          onClick={handleBold}
          Icon={FaBold}
        />
        <BubbleIconItem
          active={editor.isActive("italic")}
          onClick={handleItalic}
          Icon={FaItalic}
        />
        <BubbleIconItem
          active={editor.isActive("underline")}
          onClick={handleUnderline}
          Icon={FaUnderline}
        />
        <BubbleIconItem
          active={editor.isActive("strike")}
          onClick={handleLineThrough}
          Icon={AiOutlineStrikethrough}
        />
        <BubbleIconItem
          active={editor.isActive("code")}
          onClick={handleCode}
          Icon={IoCodeSlashOutline}
        />
        <BubbleIconList
          active={editor.isActive("link")}
          onClick={handleLink}
          Icon={IoIosLink}
        />
        <BubbleIconList onClick={handleOpenColorList} Icon={BiFontColor} />
      </BubbleMenu>
      {linkList && !editor.isActive("link") && (
        <BubbleSelectList>
          <div ref={linkListRef} className="link__wrapper">
            <Input
              value={linkValue}
              onChange={(e) => setLinkValue(e.target.value)}
              placeholder="Write your link in here"
            />
            <button
              disabled={linkValue.length === 0}
              onClick={handleSaveLink}
              className="link__button_save"
            >
              Save Link
            </button>
          </div>
        </BubbleSelectList>
      )}
      {colorList && (
        <BubbleSelectList>
          <div ref={colorListRef} className="color__wrapper">
            <span className="section__title">Color</span>
            <div className="colors__col">
              {colorsArr.map(({ color, colorName }: IColorObj, index) => (
                <TextColorItem
                  key={index}
                  onClick={() => handleColor(color, index)}
                  color={color}
                  colorName={colorName}
                  active={editor.isActive("textStyle", { color })}
                />
              ))}
            </div>
            <span className="section__title">Background</span>
            <div className="colors__col">
              {backgroundsArr.map(({ color, colorName }: IColorObj, index) => (
                <TextColorItem
                  key={index}
                  onClick={() => handleHighlight(color, index)}
                  background={color}
                  colorName={colorName}
                  active={editor.isActive("highlight", { color })}
                />
              ))}
            </div>
          </div>
        </BubbleSelectList>
      )}
    </div>
  );
};

export default CustomBubbleMenu;
