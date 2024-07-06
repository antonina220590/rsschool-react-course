import { Component } from 'react';
import style from './input.module.css';

class Input extends Component {
  render() {
    return (
      <>
        <input
          className={style.input}
          id="input"
          name="input"
          type="text"
          placeholder="search....."
        />{' '}
        <button className={style.searchBtn} type="button">
          Search
        </button>
      </>
    );
  }
}

export default Input;
