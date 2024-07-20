// import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './details-page.module.css';
import style from '../cards/cards.module.css';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../../app/hooks';
import apiSlice from '../../api/apiSlices';

function CardDetails() {
  const { planetId } = useParams();
  const result = Number(planetId?.slice(1));

  // const [planet, setPlanet] = useState<IPlanet>();
  // const [isLoading, setIsLoading] = useState(false);
  const currPage = useAppSelector((state) => state.counter.value).toString();

  const navigate = useNavigate();

  const closeCard = () => {
    if (result) {
      navigate(`/?page=${currPage}`);
    }
  };

  const { data: planet, isFetching } = apiSlice.useGetPlanetQuery(result);
  return (
    <div className={styles.detailsDiv}>
      {isFetching ? (
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
          <button className={styles.closeBtn} type="button" onClick={closeCard}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default CardDetails;
