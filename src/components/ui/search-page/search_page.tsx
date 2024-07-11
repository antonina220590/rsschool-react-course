import { useEffect, useState } from 'react';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanet } from '../../utils/interface';

function SearchPage() {
  const BASE_URL = 'https://swapi.dev/api/';
  const [planets, setPlanets] = useState<IPlanet[] | null>([]);
  const [valueV, setValueV] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );

  const getMyData = (value: string) =>
    setValueV(localStorage.getItem('ATSearch') || value);

  useEffect(() => {
    fetch(`${BASE_URL}/planets/?search=${valueV}`)
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
  }, [valueV]);

  return (
    <>
      <div className={style.headerWrapper}>
        <div>
          <Input onClick={getMyData} />
        </div>
      </div>
      <div className={style.cardsWrapper}>
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
    </>
  );
}

export default SearchPage;
