import SearchPage from './components/ui/MainPage/SearchPage';
import style from './App.module.css';
import ErrorBoundary from './components/utils/errorBoundary';
import Flyout from './components/ui/FlyoutElement/flyout';

function App() {
  return (
    <div className={style.wrapper}>
      <ErrorBoundary>
        <SearchPage />
        <Flyout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
