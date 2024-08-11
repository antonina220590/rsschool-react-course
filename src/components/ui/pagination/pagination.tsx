import { useRouter } from 'next/router';
import style from './pagination.module.css';

function Pagination({ currentPage }: { currentPage: number }) {
  const router = useRouter();

  const goToPage = (pageNumber: number) => {
    router.push({
      pathname: '/',
      query: { ...router.query, page: pageNumber.toString() },
    });
  };

  return (
    <div className={style.paginationContainer} role="presentation">
      <button
        className={currentPage === 1 ? style.btn_disabled : style.prevBtn}
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        data-testid="prev-button"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className={style.page} data-testid="curr-page">
        {currentPage}
      </div>
      <button
        className={currentPage > 5 ? style.btn_disabled : style.nextBtn}
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        data-testid="next-button"
        disabled={currentPage > 5}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
