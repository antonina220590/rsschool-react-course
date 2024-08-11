import { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import ErrorBoundary from '../components/utils/errorBoundary';
import Flyout from '../components/ui/FlyoutElement/flyout';
import { store } from '../lib/store';
import { ThemeProvider } from '../context/themeContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
          <Flyout />
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;
