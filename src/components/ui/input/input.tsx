import { useRouter } from 'next/router';
import { useState } from 'react';
import style from './input.module.css';

function Input() {
  const router = useRouter();
  const { query } = router;
  const [currVal, setCurVall] = useState(query.search || '');

  const updateSearchParams = () => {
    router.push({
      query: {
        search: currVal,
        page: 1,
      },
    });
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurVall(event.target.value);
  };

  const getData = () => {
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
