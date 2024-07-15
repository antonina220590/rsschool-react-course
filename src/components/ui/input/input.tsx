import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const getData = () => {
    localStorage.setItem('ATSearch', searchValue);
    setValue(searchValue);
    if (searchParams) {
      setSearchParams({ search: searchValue });
    }
    onClick(value);
  };

  return (
    <div>
      <input
        className={style.input}
        id="input"
        name="search"
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
