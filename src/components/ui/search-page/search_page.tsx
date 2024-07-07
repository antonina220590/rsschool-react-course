import { Component } from 'react';
import style from './search_page.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';

class SearchPage extends Component {
  render() {
    return (
      <>
        <div className={style.headerWrapper}>
          <Input />
        </div>
        <div className={style.cardsWrapper}>
          <Cards />
        </div>
      </>
    );
  }
}

export default SearchPage;
