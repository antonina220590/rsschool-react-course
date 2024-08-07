import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../../../lib/hooks';
import { incremented, decremented, setPage } from '../../utils/counterSlice';
import style from './pagination.module.css';

function Pagination() {
  const maxNumPage = 6;
  const router = useRouter();
  const { query } = router;

  const page = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const navigate = useNavigate();
  // const { planetId } = useParams();
  // const result = Number(planetId?.slice(1));

  // const fetchPlanets = (newPage: number) => {
  //   dispatch(setPage(newPage));
  //   router.push(`/?page=${newPage}`, undefined, { shallow: true });
  // };

  useEffect(() => {
    const pageFromQuery = parseInt(router.query.page as string, 10);
    if (pageFromQuery && pageFromQuery !== page) {
      dispatch(setPage(pageFromQuery));
    }
  }, [router.query.page, page, dispatch]);

  const updateQuery = (newPage: number) => {
    dispatch(setPage(newPage));
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page: newPage.toString() },
      },
      undefined,
      { shallow: true }
    );
  };

  const increasePage = () => {
    if (page < maxNumPage) {
      const nextPage = page + 1;
      dispatch(incremented());
      updateQuery(nextPage);
    }
  };

  const decreasePage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      dispatch(decremented());
      updateQuery(prevPage);
    }
  };

  // const goBack = () => {
  //   if (result) {
  //     navigate(`/?page=${page}`);
  //   }
  // };

  return (
    <div
      className={style.paginationContainer}
      // onClick={goBack}
      role="presentation"
    >
      <button
        className={
          +(query.page || page) === 1 ? style.btn_disabled : style.prevBtn
        }
        type="button"
        onClick={decreasePage}
        data-testid="prev-button"
        disabled={page === 1}
      >
        Prev
      </button>
      <div className={style.page} data-testid="curr-page">
        {query.page || page}
      </div>
      <button
        className={page > 5 ? style.btn_disabled : style.nextBtn}
        type="button"
        onClick={increasePage}
        data-testid="next-button"
        disabled={page > 5}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
