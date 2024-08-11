import router from 'next/router';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import styl from '../../../App.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IResponseResult } from '../../utils/interface';
import Spinner from '../spinner/spinner';
import Pagination from '../pagination/pagination';
import CardDetails from '../DetailsPage/DetailsPage';
import useTheme from '../../../context/useThemeHook';

export interface SearchPageProps {
  initialData: IResponseResult;
  currPage: number;
}

function SearchPage({ initialData, currPage }: SearchPageProps) {
  const planets = initialData;

  const getId = (id: string) => {
    router.push({
      query: { ...router.query, planet: id },
    });
  };
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`${currentTheme === 'dark' ? styl.wrapperDark : styl.wrapperLight}`}
      data-testid="theme"
    >
      <button className={style.errorBtn} onClick={toggleTheme} type="button">
        Toggle Theme
      </button>
      <div className={style.headerWrapper}>
        <div>
          <Input />
        </div>
      </div>
      <Pagination currentPage={currPage} />
      <div className={style.cardsWrapper}>
        {planets?.isFetching ? (
          <Spinner />
        ) : (
          <div className={style.commonWrapper}>
            {planets?.results?.map((planet) => (
              <div className={styles.cardContainer} key={planet.name}>
                <Cards name={planet.name} url={planet.url} />
                <button
                  className={style.learnMoreBtn}
                  type="submit"
                  onClick={() => getId(planet.url?.split('/')[5] || '')}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        )}
        <CardDetails initialData={initialData} />
      </div>
    </div>
  );
}

export default SearchPage;
