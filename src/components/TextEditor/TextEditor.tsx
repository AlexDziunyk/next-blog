"use client";

import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useCurrentEditor } from "@tiptap/react";
import { defaultExtensions } from "./extensions/extensions";
import { slashCommand } from "./extensions/slashCommands";
import { useEditor, EditorContent } from "@tiptap/react";
import CustomBubbleMenu from "./components/BubbleMenu/CustomBubbleMenu";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Color,
      TextStyle,
      Highlight.configure({ multicolor: true }),
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
