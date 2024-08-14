import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import style from './header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <img className={style.headerImage} src="./logo.png" alt="logo" />
      <button className={clsx(style.buttons)} type="button">
        <Link to="forms1">Uncontrolled Form</Link>
      </button>
      <button className={clsx(style.buttons)} type="button">
        <Link to="forms2">React Hooks Forms</Link>
      </button>
    </header>
  );
}

export default Header;
