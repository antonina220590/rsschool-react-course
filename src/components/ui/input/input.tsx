import { useState } from 'react';
import style from './input.module.css';

type InputProps = {
  onClick: (arg: string) => void;
};

function Input({ onClick }: InputProps) {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );
  const [value, setValue] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const getData = () => {
    localStorage.setItem('ATSearch', searchValue);
    setValue(searchValue);
    onClick(value);
  };

  return (
    <div>
      <input
        className={style.input}
        id="input"
        name="input"
        type="text"
        value={searchValue}
        onChange={handleSearchValue}
        placeholder="search....."
      />
      <button className={style.searchBtn} type="submit" onClick={getData}>
        Search
      </button>
    </div>
  );
}

export default Input;
