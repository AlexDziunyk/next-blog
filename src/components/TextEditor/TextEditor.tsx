"use client";

import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor, EditorContent } from "@tiptap/react";
import CustomBubbleMenu from "./components/BubbleMenu/CustomBubbleMenu";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import "./style.scss";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenu from "@tiptap/extension-bubble-menu";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Underline,
      Link,
      Color,
      TextStyle,
      Highlight.configure({ multicolor: true }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Blockquote,
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Placeholder.configure({ placeholder: "Write something..." }),
    ],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      {editor && <CustomBubbleMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
