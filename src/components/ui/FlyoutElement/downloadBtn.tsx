import { useAppSelector } from '../../../app/hooks';
import style from './flyout.module.css';

export default function DownloadButton() {
  const list = useAppSelector((state) => state.favourites);
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
    <a
      className={style.button}
      data-testid="download"
      href={objectUrl}
      download={`${list.length}_planets.csv`}
    >
      Download
    </a>
  );
}
