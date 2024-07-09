import style from './search_page.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';

function SearchPage() {
  return (
    <>
      <div className={style.headerWrapper}>
        <Input />
      </div>
      <div className={style.cardsWrapper}>
        <Cards />
      </div>
    </>
  );
}

export default SearchPage;
