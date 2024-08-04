import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../appStore/hooks';
import { reset } from '../../utils/counterSlice';
import { setSearch } from '../../utils/searchSlice';
import style from './input.module.css';

function Input() {
  const router = useRouter();
  const { query } = router;

  const dispatch = useAppDispatch();
  const currPage = useAppSelector((state) => state.counter.value).toString();
  const searchVal = useAppSelector((state) => state.search.value || '');
  const [currVal, setCurVall] = useState(query.search || '');

  const updateSearchParams = () => {
    router.push({
      // pathname: '/search',
      query: {
        search: currVal,
        page: currPage,
      },
    });
  };

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
    updateSearchParams();
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
