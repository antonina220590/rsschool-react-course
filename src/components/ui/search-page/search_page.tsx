import { Component } from 'react';
import style from './search_page.module.css';
import Input from '../input/input';

class SearchPage extends Component {
  render() {
    return (
      <div className={style.header_container}>
        <Input />
      </div>
    );
  }
}

export default SearchPage;
