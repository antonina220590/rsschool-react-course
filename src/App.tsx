import SearchPage from './components/ui/MainPage/SearchPage';
import style from './App.module.css';
import ErrorBoundary from './components/utils/errorBoundary';

function App() {
  return (
    <div className={style.wrapper}>
      <ErrorBoundary>
        <header className={style.header} />
        <SearchPage />
      </ErrorBoundary>
    </div>
  );
}

export default App;
