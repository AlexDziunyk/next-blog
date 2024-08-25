"use client";

import { useEffect, useState } from "react";
import "./style.scss";
import { login, signup } from "@/utils/authActions";;
import {
  redirect,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { cleanQuery, navigate } from "@/utils/navigatorActions";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";

const LoginModal = () => {
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const [loginStatus, setLoginStatus] = useState("login");

  useEffect(() => {
    console.log(path);
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
    <Modal>
      <div className="login__modal">
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
          <span onClick={() => setLoginStatus("signup")}>Sign Up</span>
          {/* <Link href="/signup">Sign Up</Link> */}
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
