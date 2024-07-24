import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import style from './App.module.css';

function ThemeBtn() {
  const { darkTheme, setTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      className={`${darkTheme === 'dark' ? style.darkBtn : style.lightBtn}`}
    >
      Change Theme
    </button>
  );
}

export default ThemeBtn;
