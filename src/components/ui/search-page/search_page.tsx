import { Component } from 'react';
import style from './search_page.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IProps } from '../../utils/interface';

class SearchPage extends Component<object, { counter: number }> {
  constructor(props: IProps) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    if (counter === 1) {
      throw new Error('Something went wrong!');
    }
    return (
      <>
        <div className={style.headerWrapper}>
          <button
            className={style.errorBtn}
            type="button"
            onClick={this.handleClick}
          >
            Throw Error
          </button>
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
