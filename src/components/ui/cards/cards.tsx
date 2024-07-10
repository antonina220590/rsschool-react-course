import { useEffect, useState } from 'react';
import style from './cards.module.css';
import { getSearch } from '../../api/api';
import { IPlanet } from '../../utils/interface';
import Spinner from '../spinner/spinner';

function Cards() {
  const [value, setValue] = useState<string>(
    localStorage.getItem('ATSearch') || ''
  );
  const [planets, setPlanets] = useState<IPlanet[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const fetched = await getSearch(value);
      setPlanets(fetched);
      setIsLoading(true);
      setValue(localStorage.getItem('ATSearch') || '');
    };
    getData();
  }, [value, isLoading]);

  return (
    <div className={style.cardsCommonBox}>
      {planets && isLoading ? (
        <div className={style.cardsCommonBox}>
          {planets.map((planet) => {
            const id = planet.url.split('/')[5];
            return (
              <div className={style.cardContainer} key={planet.name}>
                <div className={style.cardImageBox}>
                  <img
                    className={style.cardImage}
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    onError={({ currentTarget }) => {
                      const newTarget = currentTarget;
                      newTarget.onerror = null;
                      newTarget.src =
                        'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                    }}
                    alt="planet"
                  />
                </div>
                <div className={style.cardInfo}>
                  <h3 className={style.cardTitle}>{planet.name}</h3>
                  <p className={style.cardDescription}>
                    Rotation Period:{' '}
                    <span className={style.fetchInfo}>
                      {planet.rotation_period}
                    </span>
                  </p>
                  <p className={style.cardDescription}>
                    Orbital Period:{' '}
                    <span className={style.fetchInfo}>
                      {planet.orbital_period}
                    </span>
                  </p>
                  <p className={style.cardDescription}>
                    Diameter:
                    <span className={style.fetchInfo}>{planet.diameter}</span>
                  </p>
                  <p className={style.cardDescription}>
                    Climate:{' '}
                    <span className={style.fetchInfo}>{planet.climate}</span>
                  </p>
                  <p className={style.cardDescription}>
                    Gravity:{' '}
                    <span className={style.fetchInfo}>{planet.gravity}</span>
                  </p>
                  <p className={style.cardDescription}>
                    Terrain:{' '}
                    <span className={style.fetchInfo}>{planet.terrain}</span>
                  </p>
                  <p className={style.cardDescription}>
                    Population:{' '}
                    <span className={style.fetchInfo}>{planet.population}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Cards;
