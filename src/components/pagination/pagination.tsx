import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import style from './pagination.module.css';

type PaginationProps = {
  onClickIncrease: (arg: number) => void;
  onClickDecrease: (arg: number) => void;
};

function Pagination({ onClickDecrease, onClickIncrease }: PaginationProps) {
  const maxNumPage = 6;
  const [page, setPage] = useState<number>(1);

  const increasePage = () => {
    if (page < maxNumPage) {
      setPage(page + 1);
    }
    const LSPage = (page + 1).toString();
    localStorage.setItem('ATPage', LSPage);
    onClickIncrease(Number(page));
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    const LSPage = (page - 1).toString();
    localStorage.setItem('ATPage', LSPage);
    onClickDecrease(Number(page));
  };

  return (
    <div className={style.paginationContainer}>
      <button
        className={page === 1 ? style.btn_disabled : style.prevBtn}
        type="button"
        onClick={decreasePage}
      >
        Prev
      </button>
      {/* <div className={style.page}>{`${page}`}</div> */}
      <input
        className={style.page}
        id="input"
        name="current-page"
        type="text"
        value={page}
        // onChange={handleSearchValue}
        placeholder="search....."
      />
      <button
        className={page < 6 ? style.nextBtn : style.btn_disabled}
        type="button"
        onClick={increasePage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
