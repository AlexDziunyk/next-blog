"use client";
import TextEditor from "@/components/TextEditor/TextEditor";
import "./style.scss";
import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";

const Create = () => {
  const [titleValue, setTitleValue] = useState("");

  return (
    <div className="create">
      <div className="create__editor">
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
