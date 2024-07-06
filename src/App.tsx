import { Component } from 'react';
import SearchPage from './components/ui/search-page/search_page';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <SearchPage />
        </header>
      </div>
    );
  }
}

export default App;
