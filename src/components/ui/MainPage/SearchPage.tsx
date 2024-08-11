import router from 'next/router';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IResponseResult } from '../../utils/interface';
import Spinner from '../spinner/spinner';
import Pagination from '../pagination/pagination';
import CardDetails from '../DetailsPage/DetailsPage';

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

  return (
    <>
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
    </>
  );
}

export default SearchPage;
