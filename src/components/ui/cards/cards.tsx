import style from './cards.module.css';
import { IPlanetMain } from '../../utils/interface';

function Cards({ name, url }: IPlanetMain) {
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
      </div>
    </>
  );
}

export default Cards;
