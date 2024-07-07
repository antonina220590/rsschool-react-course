import { Component } from 'react';
import SearchPage from './components/ui/search-page/search_page';
import style from './App.module.css';
import ErrorBoundary from './components/utils/errorBoundary';

class App extends Component {
  render() {
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
}

export default App;
