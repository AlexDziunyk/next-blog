"use client";
import TextEditor from "@/components/TextEditor/TextEditor";
import "./style.scss";
import Input from "@/components/Input/Input";
import { useState } from "react";
import Cover from "@/components/Cover/Cover";

const Create = () => {
  const [titleValue, setTitleValue] = useState("");

  return (
    <div className="create">
      <Cover />
      <div className="container create__editor">
        <Input
          inputWrapperClassName="title__input__wrapper"
          inputClassName="title__input"
          placeholder={"Title"}
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <TextEditor />
      </div>
    </div>
  );
};

export default Create;
