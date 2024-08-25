"use client";

import { useEffect, useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import "./style.scss";
import Button from "../Button/Button";
import { login, signup } from "./actions";
import { redirect, useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { cleanQuery } from "@/utils/navigatorActions";

const LoginModal = () => {
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const loginStatus = params.get("login");

  useEffect(() => {
    console.log(path)
    console.log(params.get("login"));
  });

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
    <>
      {loginStatus && (
        <div className="login-modal__wrapper">
          <div className="login-modal__container">
            {loginStatus === "signin" && (
              <div>
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
                  <Button type="submit">Login</Button>
                </form>
              </div>
            )}
            {loginStatus === "signup" && (
              <div>
                <h2>Sign Up</h2>
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
                  <Button type="submit" onClick={() => router.replace(path)}>Signup</Button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
