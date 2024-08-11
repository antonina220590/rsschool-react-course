import { useRouter } from 'next/router';
import styles from './details-page.module.css';
import style from '../cards/cards.module.css';
import { IResponseResult } from '../../utils/interface';

export interface SearchPageProps {
  initialData: IResponseResult;
}

function CardDetails({ initialData }: SearchPageProps) {
  const router = useRouter();
  const { query } = router;

  const closeCard = () => {
    const { planet, ...newQuery } = router.query;

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  const planets = initialData;
  const myId = query.planet;

  planets.results.map((planet) => {
    if (planet?.url?.split('/')[5] === myId) {
      return planet.name;
    }
    return '';
  });

  return (
    <>
      {planets.results.map((planet) =>
        planet?.url?.split('/')[5] === myId ? (
          <div className={styles.detailsDiv} key={planet.name}>
            {' '}
            <div className={style.cardImageBox}>
              {' '}
              <img
                className={styles.cardImageDetails}
                src={`https://starwars-visualguide.com/assets/img/planets/${planet?.url?.split('/')[5]}.jpg`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
                }}
                alt="planet"
              />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={style.cardTitle}>{planet.name}</h3>
              <p className={style.cardDescription}>
                Rotation Period:{' '}
                <span className={style.fetchInfo}>
                  {planet?.rotation_period}
                </span>
              </p>
              <p className={style.cardDescription}>
                Orbital Period:{' '}
                <span className={style.fetchInfo}>
                  {planet?.orbital_period}
                </span>
              </p>
              <p className={style.cardDescription}>
                Diameter:{' '}
                <span className={style.fetchInfo}>{planet?.diameter}</span>
              </p>
              <p className={style.cardDescription}>
                Climate:{' '}
                <span className={style.fetchInfo}>{planet?.climate}</span>
              </p>
              <p className={style.cardDescription}>
                Gravity:{' '}
                <span className={style.fetchInfo}>{planet?.gravity}</span>
              </p>
              <p className={style.cardDescription}>
                Terrain:{' '}
                <span className={style.fetchInfo}>{planet?.terrain}</span>
              </p>
              <p className={style.cardDescription}>
                Population:{' '}
                <span className={style.fetchInfo}>{planet?.population}</span>
              </p>
            </div>
            <button
              className={styles.closeBtn}
              type="button"
              onClick={closeCard}
            >
              Close
            </button>
          </div>
        ) : (
          <div key={`empty-${planet.name}`} />
        )
      )}
    </>
  );
}

export default CardDetails;
