import { useContext } from 'react';
import SearchPage from './components/ui/MainPage/SearchPage';
import style from './App.module.css';
import ErrorBoundary from './components/utils/errorBoundary';
import Flyout from './components/ui/FlyoutElement/flyout';
import ThemeBtn from './components/ui/themeButton/themeButton';
import { ThemeContext } from './context/themeContext';

function App() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${darkTheme === 'dark' ? style.wrapperDark : style.wrapperLight}`}
    >
      <ErrorBoundary>
        <ThemeBtn />
        <SearchPage />
        <Flyout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
