import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { incremented, decremented } from '../../utils/counterSlice';
import style from './pagination.module.css';

function Pagination() {
  const maxNumPage = 6;

  const page = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const { planetId } = useParams();
  const result = Number(planetId?.slice(1));

  const increasePage = () => {
    if (page < maxNumPage) {
      dispatch(incremented());
    }
    const LSPage = (page + 1).toString();
    setSearchParams({ page: LSPage });
  };

  const decreasePage = () => {
    if (page > 1) {
      dispatch(decremented());
    }
    const LSPage = (page - 1).toString();
    if (searchParams) {
      setSearchParams({ page: LSPage });
    }
  };

  const goBack = () => {
    if (result) {
      navigate(`/?page=${page}`);
    }
  };

  return (
    <div
      className={style.paginationContainer}
      onClick={goBack}
      role="presentation"
    >
      <button
        className={page === 1 ? style.btn_disabled : style.prevBtn}
        type="button"
        onClick={decreasePage}
      >
        Prev
      </button>
      <div className={style.page}>{page}</div>
      <button
        className={page > 5 ? style.btn_disabled : style.nextBtn}
        type="button"
        onClick={increasePage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
