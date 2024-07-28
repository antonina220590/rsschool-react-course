import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { reset } from '../../utils/counterSlice';
import { setSearch } from '../../utils/searchSlice';
import style from './input.module.css';

function Input() {
  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.counter.value).toString();
  const searchVal = useAppSelector((state) => state.search.value || '');
  const [currVal, setCurVall] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurVall(event.target.value);
  };

  const getData = () => {
    if (currPage !== '1') {
      dispatch(reset());
    }
    if (searchVal !== currVal) {
      dispatch(setSearch(currVal));
    }
    if (searchParams) {
      setSearchParams({ search: currVal, page: currPage });
    }
  };

  return (
    <div>
      <input
        className={style.input}
        id="input"
        name="search"
        type="text"
        onChange={handleSearchValue}
        placeholder="search....."
        data-testid="search-input"
      />
      <button
        className={style.searchBtn}
        type="submit"
        onClick={getData}
        data-testid="search"
      >
        Search
      </button>
    </div>
  );
}

export default Input;
