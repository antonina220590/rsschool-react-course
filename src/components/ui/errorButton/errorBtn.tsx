import { Component } from 'react';
import style from './errorBtn.module.css';

class ErrorButton extends Component {
  render() {
    return (
      <button className={style.errorBtn} type="button">
        Throw Error
      </button>
    );
  }
}

export default ErrorButton;
