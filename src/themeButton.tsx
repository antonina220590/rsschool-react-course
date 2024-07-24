import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import style from './App.module.css';

function ThemeBtn() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div className={style.themeBtnBox}>
      <label htmlFor="darkBtn" className={style.themeLabel}>
        Dark Theme{' '}
        <input
          id="darkBtn"
          className={style.radioBtn}
          type="radio"
          name="themeBtn"
          value="darkTheme"
          onClick={() => setTheme('dark')}
          defaultChecked
        />{' '}
      </label>
      <label htmlFor="lightBtn" className={style.themeLabel}>
        Light Theme{' '}
        <input
          id="lightBtn"
          className={style.radioBtn}
          type="radio"
          name="themeBtn"
          value="lightTheme"
          onClick={() => setTheme('light')}
        />{' '}
      </label>
    </div>
  );
}

export default ThemeBtn;
