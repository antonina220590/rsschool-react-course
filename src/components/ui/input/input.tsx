import { Component } from 'react';
import style from './input.module.css';
import { IProps } from '../../utils/interface';

class Input extends Component<object, { searchValue: string }> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('ATSearch') || '',
    };
  }

  handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({
      searchValue: value,
    });
  };

  handleLS = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const { searchValue } = this.state;
    localStorage.setItem('ATSearch', `${searchValue}`);
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <input
          className={style.input}
          id="input"
          name="input"
          type="text"
          value={searchValue}
          onChange={this.handleSearchValue}
          placeholder="search....."
        />
        <button
          className={style.searchBtn}
          type="button"
          onClick={this.handleLS}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Input;
