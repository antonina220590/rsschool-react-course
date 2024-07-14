import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  // useSearchParams,
} from 'react-router-dom';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanetMain } from '../../utils/interface';
import Spinner from '../spinner/spinner';
import { getSearch } from '../../api/api';
import Pagination from '../../pagination/pagination';

function SearchPage() {
  const [planets, setPlanets] = useState<IPlanetMain[] | null>([]);
  const [valueV, setValueV] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );

  const [pageNum, setPageNum] = useState<number>(
    Number(localStorage.getItem('ATPage') || 0)
  );

  const [isLoading, setIsLoading] = useState(false);
  const { planetId } = useParams();
  const result = Number(planetId?.slice(1));

  const getMyData = (value: string) =>
    setValueV(localStorage.getItem('ATSearch') || value);

  const getMyPage = () => {
    setPageNum(Number(localStorage.getItem('ATPage') || 0));
  };

  const navigate = useNavigate();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get('search') || '';

  const goBack = () => {
    if (result) {
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setIsLoading(true);
        const fetched = await getSearch(valueV, pageNum);
        setPlanets(fetched);
      } catch (error) {
        <p>error</p>;
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlanets();
  }, [valueV, pageNum]);

  return (
    <>
      <div className={style.headerWrapper} onClick={goBack} role="presentation">
        <div>
          <Input onClick={getMyData} />
        </div>
      </div>
      <Pagination onClickDecrease={getMyPage} onClickIncrease={getMyPage} />
      <div className={style.cardsWrapper}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div
            className={style.commonWrapper}
            onClick={goBack}
            role="presentation"
          >
            {planets?.map((planet) => {
              return (
                <div className={styles.cardContainer} key={planet.name}>
                  <Link
                    className={style.link}
                    to={`/planet/:${planet.url.split('/')[5]}`}
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
