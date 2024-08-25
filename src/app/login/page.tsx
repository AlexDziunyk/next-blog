"use client";

import { useState } from "react";
import "./style.scss";
import { login } from "@/utils/authActions";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("start");
    const formData = new FormData();
    formData.append("email", emailValue);
    formData.append("password", passwordValue);

    const result = await login(formData);

    console.log(result);
  };

  return (
    <div className="login__wrapper">
      <div className="login__page">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login">
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
          <Button type="submit">Login</Button>
          <Link href={"/signup"}>Signup</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
