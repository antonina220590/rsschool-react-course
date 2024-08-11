import { AppProps } from 'next/app';
import { useContext } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import ErrorBoundary from '../components/utils/errorBoundary';
import Flyout from '../components/ui/FlyoutElement/flyout';
import ThemeBtn from '../components/ui/themeButton/themeButton';
import { store } from '../lib/store';
import { ThemeContext } from '../context/themeContext';
import style from '../App.module.css';

function App({ Component, pageProps }: AppProps) {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${darkTheme === 'dark' ? style.wrapperDark : style.wrapperLight}`}
      data-testid="theme"
    >
      <ErrorBoundary>
        <ReduxProvider store={store}>
          <ThemeBtn />
          <Component {...pageProps} />
          <Flyout />
        </ReduxProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
