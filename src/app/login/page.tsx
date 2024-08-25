"use client";

import { useState } from "react";
import "./style.scss";
import { signup } from "@/utils/authActions";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Button from "@/components/Button/Button";

const LoginModal = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("start");
    const formData = new FormData();
    formData.append("email", emailValue);
    formData.append("password", passwordValue);

    const result = await signup(formData);

    console.log(result);
  };

  return (
    <div className="login__wrapper">
      <div className="login__page">
        <h2>Login</h2>
        <form className="login">
          <InputWithLabel
            inputWrapperClassName="login-input__wrapper"
            inputClassName="login-input"
            labelText={"Email"}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder={""}
          />
          <InputWithLabel
            inputWrapperClassName="login-input__wrapper"
            inputClassName="login-input"
            type="password"
            labelText={"Password"}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder={""}
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
