import style from './cards.module.css';
import { IPlanet } from '../../utils/interface';

function Cards({
  name,
  climate,
  diameter,
  gravity,
  orbital_period,
  population,
  rotation_period,
  terrain,
  url,
}: IPlanet) {
  return (
    <>
      <div className={style.cardImageBox}>
        {' '}
        <img
          className={style.cardImage}
          src={`https://starwars-visualguide.com/assets/img/planets/${url.split('/')[5]}.jpg`}
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
        <h3 className={style.cardTitle}>{name}</h3>
        <p className={style.cardDescription}>
          Rotation Period:{' '}
          <span className={style.fetchInfo}>{rotation_period}</span>
        </p>
        <p className={style.cardDescription}>
          Orbital Period:{' '}
          <span className={style.fetchInfo}>{orbital_period}</span>
        </p>
        <p className={style.cardDescription}>
          Diameter:
          <span className={style.fetchInfo}>{diameter}</span>
        </p>
        <p className={style.cardDescription}>
          Climate: <span className={style.fetchInfo}>{climate}</span>
        </p>
        <p className={style.cardDescription}>
          Gravity: <span className={style.fetchInfo}>{gravity}</span>
        </p>
        <p className={style.cardDescription}>
          Terrain: <span className={style.fetchInfo}>{terrain}</span>
        </p>
        <p className={style.cardDescription}>
          Population: <span className={style.fetchInfo}>{population}</span>
        </p>
      </div>
    </>
  );
}

export default Cards;
