import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanet } from '../../utils/interface';
import Spinner from '../spinner/spinner';
import { getSearch } from '../../api/api';

function SearchPage() {
  const [planets, setPlanets] = useState<IPlanet[] | null>([]);
  const [valueV, setValueV] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );
  const [isLoading, setIsLoading] = useState(false);

  const getMyData = (value: string) =>
    setValueV(localStorage.getItem('ATSearch') || value);

  const navigate = useNavigate();
  const link = window.location.href;

  const goBack = () => {
    if (link.includes('planet')) {
      navigate(-1);
    }
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setIsLoading(true);
        const fetched = await getSearch(valueV);
        setPlanets(fetched);
      } catch (error) {
        <p>error</p>;
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlanets();
  }, [valueV]);

  return (
    <>
      <div className={style.headerWrapper} onClick={goBack} role="presentation">
        <div>
          <Input onClick={getMyData} />
        </div>
      </div>
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
                    to={`/main/:pageId/planet/:${planet.url.split('/')[5]}`}
                  >
                    <Cards
                      name={planet.name}
                      climate={planet.climate}
                      diameter={planet.diameter}
                      gravity={planet.gravity}
                      orbital_period={planet.orbital_period}
                      population={planet.population}
                      rotation_period={planet.rotation_period}
                      terrain={planet.terrain}
                      url={planet.url}
                    />
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
