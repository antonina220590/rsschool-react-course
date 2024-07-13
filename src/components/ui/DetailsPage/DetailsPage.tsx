import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPlanet } from '../../utils/interface';
import styles from './details-page.module.css';
import style from '../cards/cards.module.css';
import { getPlanet } from '../../api/api';
import Spinner from '../spinner/spinner';

function CardDetails() {
  const pageId = window.location.href;
  const result = pageId.split('/')[6].slice(1);

  const [planet, setPlanet] = useState<IPlanet>();
  const [planetId, setPlanetId] = useState<number>(Number(result));
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const link = window.location.href;

  const goBack = () => {
    if (link.includes('planet')) {
      navigate(-1);
    }
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      setPlanetId(Number(result));
      try {
        setIsLoading(true);
        const fetched = await getPlanet(planetId);
        setPlanet(fetched);
      } catch (error) {
        <p>error</p>;
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlanets();
  }, [planetId, result]);

  return (
    <div className={styles.detailsDiv}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={style.cardImageBox}>
            {' '}
            <img
              className={styles.cardImageDetails}
              src={`https://starwars-visualguide.com/assets/img/planets/${planet?.url.split('/')[5]}.jpg`}
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
            <h3 className={style.cardTitle}>{planet?.name}</h3>
            <p className={style.cardDescription}>
              Rotation Period:{' '}
              <span className={style.fetchInfo}>{planet?.rotation_period}</span>
            </p>
            <p className={style.cardDescription}>
              Orbital Period:{' '}
              <span className={style.fetchInfo}>{planet?.orbital_period}</span>
            </p>
            <p className={style.cardDescription}>
              Diameter:
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
          <button className={styles.closeBtn} type="button" onClick={goBack}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default CardDetails;
