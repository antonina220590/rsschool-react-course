/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// // import { useRouter } from 'next/router';

import { useRouter } from 'next/router';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanetMain, IResponseResult } from '../../utils/interface';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../../lib/hooks';
import { apiSlice, useGetAllPlanetsQuery } from '../../../lib/api/apiSlices';
import Pagination from '../pagination/pagination';

export interface SearchPageProps {
  initialData: IResponseResult;
  currPage: number;
}

const SearchPage: React.FC<SearchPageProps> = ({ initialData, currPage }) => {
  // const router = useRouter();

  // const { data, error, isLoading } = useGetAllPlanetsQuery(
  //   { page: currPage, search: '' },
  //   {
  //     skip: router.isFallback,
  //     refetchOnMountOrArgChange: true,
  //   }
  // );
  // const planets = data;
  // console.log(planets);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred</div>;

  return (
    <>
      <div className={style.headerWrapper}>
        <div>
          <Input />
        </div>
      </div>
      <Pagination />
      <div className={style.cardsWrapper}>
        {initialData?.isFetching ? (
          <Spinner />
        ) : (
          <div className={style.commonWrapper}>
            {initialData?.results?.map((planet: IPlanetMain) => (
              <div className={styles.cardContainer} key={planet.name}>
                <Cards name={planet.name} url={planet.url} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
