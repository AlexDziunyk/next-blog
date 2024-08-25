"use client";

import { useState } from "react";
import "./style.scss";
import { signup } from "@/utils/authActions";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Button from "@/components/Button/Button";
import Link from "next/link";

const SignupModal = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", emailValue);
    formData.append("password", passwordValue);

    const result = await signup(formData);

    console.log(result);
  };

  return (
    <div className="signup__wrapper">
      <div className="signup__page">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} className="signup__form">
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
          <Link href={"/signup"}>Signup</Link>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
