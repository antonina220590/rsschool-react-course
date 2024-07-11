import { useEffect, useState } from 'react';
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
      <div className={style.headerWrapper}>
        <div>
          <Input onClick={getMyData} />
        </div>
      </div>
      <div className={style.cardsWrapper}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={style.commonWrapper}>
            {planets?.map((planet) => {
              return (
                <div className={styles.cardContainer} key={planet.name}>
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage;
