import { useEditor, EditorContent } from "@tiptap/react";
import CustomBubbleMenu from "./components/BubbleMenu/CustomBubbleMenu";
import "./style.scss";
import { tiptapExtensions } from "@/utils/textEditor/tiptapExtensions";
import CustomFloatingMenu from "./components/FloatingMenu/CustomFloatingMenu";

const TextEditor = () => {
  const editor = useEditor({
    extensions: tiptapExtensions,
    content: "",
  });

  return (
    <div className="text-editor">
      {/* {editor && <FixedMenu />} */}
      {editor && <CustomFloatingMenu editor={editor}/>}
      {editor && <CustomBubbleMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
