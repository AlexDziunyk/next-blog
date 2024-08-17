import { BubbleMenu, Editor } from "@tiptap/react";
import "./style.scss";
import BubbleIconItem from "./BubbleIconItem";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import BubbleSelectList from "./BubbleSelectList";
import Input from "@/components/Input/Input";
import BubbleIconList from "./BubbleIconList";
import { useEffect, useRef, useState } from "react";

interface IBubbleMenuProps {
  editor: Editor;
}

const CustomBubbleMenu = ({ editor }: IBubbleMenuProps) => {
  const [linkList, setLinkList] = useState<boolean>(false);
  const linkListRef = useRef<HTMLInputElement>(null);
  const [linkValue, setLinkValue] = useState<string>("");

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
  }

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

    document.addEventListener("mousedown", handleClickLinkOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickLinkOutSide);
    };
  }, [linkListRef]);

  useEffect(() => {
    if (linkList === false) {
      setLinkValue("");
    }
  }, [linkList])

  return (
    <div className="bubble-menu__wrapper">
      <BubbleMenu
        className="bubble-menu"
        editor={editor}
        tippyOptions={{ duration: 100 }}
      >
        <BubbleIconItem active={editor.isActive("bold")} onClick={handleBold} Icon={FaBold} />
        <BubbleIconItem active={editor.isActive("italic")} onClick={handleItalic} Icon={FaItalic} />
        <BubbleIconItem active={editor.isActive("underline")} onClick={handleUnderline} Icon={FaUnderline} />
        <BubbleIconItem
          active={editor.isActive("strike")}
          onClick={handleLineThrough}
          Icon={AiOutlineStrikethrough}
        />
        <BubbleIconItem active={editor.isActive("code")} onClick={handleCode} Icon={IoCodeSlashOutline} />
        <BubbleIconList active={editor.isActive("link")} onClick={handleLink} Icon={IoIosLink} />
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
    </div>
  );
};

export default CustomBubbleMenu;
