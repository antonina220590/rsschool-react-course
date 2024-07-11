import { useCallback, useEffect, useState } from 'react';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
// import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanet } from '../../utils/interface';

function SearchPage() {
  const BASE_URL = 'https://swapi.dev/api/';
  const [planets, setPlanets] = useState<IPlanet[] | null>([]);

  const [searchValue, setSearchValue] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const getData = () => {
    localStorage.setItem('ATSearch', searchValue);
    setValue(searchValue);
  };

  const fetchPlanets = useCallback(async () => {
    fetch(`${BASE_URL}/planets/?search=${value}`)
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
  }, [value]);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <>
      <div className={style.headerWrapper}>
        <div>
          <input
            className={style.input}
            id="input"
            name="input"
            type="text"
            value={searchValue}
            onChange={handleSearchValue}
            placeholder="search....."
          />
          <button className={style.searchBtn} type="button" onClick={getData}>
            Search
          </button>
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
