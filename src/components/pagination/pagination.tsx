import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import style from './pagination.module.css';

function Pagination() {
  const [page, setPage] = useState<number>(1);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [pageCur, setPageCur] = useState(Number(searchParams.get('page')) || 1);

  const increasePage = () => {
    if (page < 6) {
      setPage(page + 1);
    }
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
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
      <div className={style.page}>{`${page}`}</div>
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
