import Button, { buttonTypes } from '../Button/Button';
import './style.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li></li>
        <li></li>
      </ul>
      <div className='navbar__buttons'>
        <Button text={"Login"} />
        <Button text={"Sing Up"} buttonType={buttonTypes.INVERT} />
      </div>
    </nav>
  )
}

export default Navbar