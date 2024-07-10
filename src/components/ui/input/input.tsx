import { useState } from 'react';
import style from './input.module.css';

function Input() {
  const [value, setValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    setValue(value);
  };

  const handleLS = () => {
    localStorage.setItem('ATSearch', searchValue);
    setValue(localStorage.getItem('ATSearch') || '');
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
      <button className={style.searchBtn} type="button" onClick={handleLS}>
        Search
      </button>
    </div>
  );
}

export default Input;
