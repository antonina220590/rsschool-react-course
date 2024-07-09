import SearchPage from './components/ui/search-page/search_page';
import style from './App.module.css';
import ErrorBoundary from './components/utils/errorBoundary';

function App() {
  return (
    <div className={style.wrapper}>
      <ErrorBoundary>
        <header className={style.header}>
          <SearchPage />
        </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
