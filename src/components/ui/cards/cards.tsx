import { useEffect, useState } from 'react';
import style from './cards.module.css';
import { IPlanet } from '../../utils/interface';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { addToFav, deleteFromFav } from '../../utils/favouritesSlice';
// import Spinner from '../spinner/spinner';
import { fetchPlanetById } from '../../../lib/api/api';

function Cards({ name, url }: IPlanet) {
  const list = useAppSelector((state) =>
    state.favourites.some((item: IPlanet) => name === item.name)
  );
  const dispatch = useAppDispatch();

  const [checked] = useState(false);
  const [planet, setPlanet] = useState<IPlanet | null>(null);
  const [error, setError] = useState<string | null>(null);

  const planetId = Number(url?.split('/')[5]);

  useEffect(() => {
    const loadPlanet = async () => {
      try {
        const data = await fetchPlanetById(planetId);
        setPlanet(data);
      } catch (err) {
        setError(error);
      }
    };

    loadPlanet();
  }, [planetId, error]);

  const handleList = () => {
    if (!list) {
      if (planet) {
        dispatch(addToFav(planet));
      }
    } else {
      dispatch(deleteFromFav({ title: planet?.name || '' }));
    }
  };

  return (
    <div className={style.cardImageBox}>
      {/* {!planet ? (
        <Spinner />
      ) : (
        <> */}
      <img
        className={style.cardImage}
        src={`https://starwars-visualguide.com/assets/img/planets/${url?.split('/')[5]}.jpg`}
        onError={({ currentTarget }) => {
          const newTarget = currentTarget;
          newTarget.onerror = null;
          newTarget.src =
            'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
        }}
        alt="planet"
      />
      <div className={style.cardInfo}>
        <h3 className={style.cardTitle}>{name}</h3>
        <div
          title="Like"
          className={style.heartContainer}
          id={url?.split('/')[5]}
        >
          <input
            data-testid="heart"
            id={url?.split('/')[5]}
            className={style.checkbox}
            type="checkbox"
            value={name || ''}
            onChange={() => handleList()}
            checked={list ? !checked : checked}
          />
          <div className={style.svgContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.svgOutline}
              viewBox="0 0 24 24"
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.svgFilled}
              viewBox="0 0 24 24"
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100"
              width="100"
              className={style.svgCelebrate}
            >
              <polygon points="10,10 20,20" />
              <polygon points="10,50 20,50" />
              <polygon points="20,80 30,70" />
              <polygon points="90,10 80,20" />
              <polygon points="90,50 80,50" />
              <polygon points="80,80 70,70" />
            </svg>
          </div>
        </div>
      </div>
      {/* </>
      )} */}
    </div>
  );
}

export default Cards;
