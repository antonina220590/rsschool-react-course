import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import router from './components/Router/router';
import ThemeProvider from './context/themeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider initial="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
