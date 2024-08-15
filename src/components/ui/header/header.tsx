import { Link, NavLink } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img className={style.headerImage} src="./logo.png" alt="logo" />
      </Link>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.buttonsActive : style.buttons
        }
        to="forms1"
      >
        Uncontrolled Form
      </NavLink>
      <NavLink
        to="forms2"
        className={({ isActive }) =>
          isActive ? style.buttonsActive : style.buttons
        }
      >
        React Hooks Forms
      </NavLink>
    </header>
  );
}

export default Header;

// isActive ? 'buttonsActive' : 'buttons'
