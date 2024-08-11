import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { deleteFromFav } from '../../utils/favouritesSlice';
import { IPlanet } from '../../utils/interface';
import style from './flyout.module.css';
import DownloadButton from './downloadBtn';

export default function Flyout() {
  const list = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();

  const deleteAllFrom = () => {
    list.forEach((obj: IPlanet) => {
      dispatch(deleteFromFav({ title: obj.name || '' }));
    });
  };

  return (
    <div
      className={list.length ? style.flyoutWarpper_active : style.flyoutWarpper}
      data-testid="text"
    >
      <button
        type="button"
        className={style.button}
        onClick={deleteAllFrom}
        data-testid="unselect"
      >
        Unselect All
      </button>
      <span className={style.text}>
        {list.length} items added to favourites
      </span>
      {list.length >= 1 ? <DownloadButton /> : null}
    </div>
  );
}
