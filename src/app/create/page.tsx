"use client";
import TextEditor from "@/components/TextEditor/TextEditor";
import "./style.scss";
import Input from "@/components/Input/Input";
import { useEffect, useState } from "react";
import Cover from "@/components/Cover/Cover";
import Button from "@/components/Button/Button";
import { createClient } from "@/utils/supabase/client";
import { useEditor } from "@tiptap/react";
import { tiptapExtensions } from "@/utils/textEditor/tiptapExtensions";

const Create = () => {
  const [titleValue, setTitleValue] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handlePostClick = async () => {
    const { error } = await createClient().from("blogs").insert({
      title: titleValue,
      cover: imageUrl,
      content: editor?.getJSON(),
      tags: "tags1",
      author: "Alex",
    });

    console.log(error);
  };

  const editor = useEditor({
    extensions: tiptapExtensions,
    content: "",
  });

  useEffect(() => {
    return () => editor?.destroy();
  }, []);

  return (
    <div className="create">
      <Cover imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <div className="container create__editor">
        <Input
          inputWrapperClassName="title__input__wrapper"
          inputClassName="title__input"
          placeholder={"Title"}
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <TextEditor editor={editor} />
      </div>
      <Button onClick={handlePostClick}>Post</Button>
    </div>
  );
};

export default Create;
