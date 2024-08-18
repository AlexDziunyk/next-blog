import { Level } from "@tiptap/extension-heading";
import { Editor } from "@tiptap/react";

export const useMyEditor = (editor: Editor) => {
  const editorStart = editor.chain().focus();

  const handleBold = () => {
    editorStart.toggleBold().run();
  };

  const handleItalic = () => {
    editorStart.toggleItalic().run();
  };

  const handleUnderline = () => {
    editorStart.toggleUnderline().run();
  };

  const handleLineThrough = () => {
    editorStart.toggleStrike().run();
  };

  const handleCode = () => {
    editorStart.toggleCode().run();
  };

  const handleSaveLink = (linkValue: string) => {
    editorStart.setLink({ href: linkValue }).run();
  };

  const handleLink = () => {
    editorStart.unsetLink().run()
  };

  const handleColor = (color: string, index: number) => {
    if (index === 0) {
      editorStart.unsetColor().run();
    } else {
      editorStart.setColor(color).run();
    }
  };

  const handleHighlight = (color: string, index: number) => {
    if (index === 0) {
      editorStart.unsetHighlight().run();
    } else {
      editorStart.toggleHighlight({ color }).run();
    }
  };

  const handleHeading = (level: Level) => {
    editorStart.toggleHeading(({ level })).run();
  }

  const handleBlockquote = () => {
    editorStart.toggleBlockquote().run();
  }

  const handleBulletList = () => {
    editorStart.toggleBulletList().run();
  }

  const handleOrderedList = () => {
    editorStart.toggleOrderedList().run();
  }

  const handleTaskList = () => {
    editorStart.toggleTaskList().run();
  }

  return { handleBold, handleCode, handleItalic, handleLineThrough, handleUnderline, handleLink, handleSaveLink, handleColor, handleHighlight, handleHeading, handleBlockquote, handleBulletList, handleOrderedList, handleTaskList };
} 