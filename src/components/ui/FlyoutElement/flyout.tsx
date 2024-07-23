import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { deleteFromFav } from '../../utils/favouritesSlice';
import { IPlanet } from '../../utils/interface';
import style from './flyout.module.css';

export default function Flyout() {
  const list = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();

  const deleteAllFrom = () => {
    list.forEach((obj: IPlanet) => {
      dispatch(deleteFromFav({ title: obj.name }));
    });
  };

  let csvFile = '';

  if (list.length) {
    const titles = Object.keys(list[0]);
    const array = [];
    array.push(titles);
    list.forEach((item) => {
      array.push(Object.values(item));
    });
    array.forEach((data) => {
      csvFile += `${data.join(',')}\n`;
    });
  }
  const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8,' });
  const objectUrl = URL.createObjectURL(blob);

  return (
    <div
      className={list.length ? style.flyoutWarpper_active : style.flyoutWarpper}
    >
      <span className={style.text}>
        {list.length} items added to favourites
      </span>
      <div className={style.buttons}>
        <button type="button" className={style.button} onClick={deleteAllFrom}>
          Unselect All
        </button>
        <a
          className={style.button}
          href={objectUrl}
          download={`planets_${list.length}.csv`}
        >
          Download
        </a>
      </div>
    </div>
  );
}
