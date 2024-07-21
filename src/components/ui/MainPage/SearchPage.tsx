import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanetMain } from '../../utils/interface';
import Spinner from '../spinner/spinner';
import Pagination from '../pagination/pagination';
import { useAppSelector } from '../../../app/hooks';
import apiSlice from '../../api/apiSlices';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const searchVal = useAppSelector((state) => state.search.value);

  const { planetId } = useParams();
  const result = Number(planetId?.slice(1));

  const navigate = useNavigate();
  const currPage = useAppSelector(
    (state) => state.counter.value || 1
  ).toString();

  const goBack = () => {
    if (result) {
      navigate(`/?page=${currPage}`);
    }
  };

  const { data, isFetching } = apiSlice.useGetAllPlanetsQuery({
    page: currentPage,
    search: searchVal,
  });

  return (
    <>
      <div className={style.headerWrapper} onClick={goBack} role="presentation">
        <div>
          <Input />
        </div>
      </div>
      <Pagination />
      <div className={style.cardsWrapper}>
        {isFetching ? (
          <Spinner />
        ) : (
          <div
            className={style.commonWrapper}
            onClick={goBack}
            role="presentation"
          >
            {data?.results?.map((planet: IPlanetMain) => {
              return (
                <div className={styles.cardContainer} key={planet.name}>
                  <Link
                    className={style.link}
                    to={`/planet/:${planet.url.split('/')[5]}/?page=${currPage}`}
                    onClick={() =>
                      navigate(`/planet/:${planet.url.split('/')[5]}`)
                    }
                    onClickCapture={goBack}
                  >
                    <Cards name={planet.name} url={planet.url} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
}

export default SearchPage;
