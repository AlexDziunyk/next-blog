import Button, { buttonTypes } from "../Button/Button";
import "./style.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar__wrapper">
      <div className="container navbar">
        <Link className="logo" href={"/"}>
          <h1>Logo</h1>
        </Link>
        <ul>
          <li>Home</li>
          <li></li>
          <li></li>
        </ul>
        <div className="navbar__buttons">
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
          <Link href={"/signup"}>
            <Button buttonType={buttonTypes.INVERT}>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
