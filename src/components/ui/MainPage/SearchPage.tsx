/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// // import { useRouter } from 'next/router';
import style from './search_page.module.css';
import styles from '../cards/cards.module.css';
import Input from '../input/input';
import Cards from '../cards/cards';
import { IPlanetMain } from '../../utils/interface';
import Spinner from '../spinner/spinner';

// // import Pagination from '../pagination/pagination';
import { useAppSelector } from '../../../appStore/hooks';
import apiSlice from '../../api/apiSlices';
import Pagination from '../pagination/pagination';

// function SearchPage() {
//   const searchVal = useAppSelector((state) => state.search.value);
//   // const { planetId } = useParams();
//   // const result = Number(planetId?.slice(1));

//   // const navigate = useNavigate();
//   const currPage = useAppSelector(
//     (state) => state.counter.value || 1
//   ).toString();

//   // const goBack = () => {
//   //   if (result) {
//   //     navigate(`/?page=${currPage}`);
//   //   }
//   // };

//   const { data, isFetching } = apiSlice.useGetAllPlanetsQuery({
//     page: Number(currPage),
//     search: searchVal,
//   });

//   return (
//     <>
//       <div className={style.headerWrapper}>
//         <div>
//           <Input />
//         </div>
//       </div>
//       {/* <Pagination /> */}
//       <div className={style.cardsWrapper}>
//         {isFetching ? (
//           <Spinner />
//         ) : (
//           <div className={style.commonWrapper}>
//             {data?.results?.map((planet: IPlanetMain) => {
//               return (
//                 <div
//                   className={styles.cardContainer}
//                   key={planet.name}
//                   data-testid={planet.name}
//                 >
//                   <Cards name={planet.name} url={planet.url} />
//                   {/* <Link
//                     className={style.link}
//                     to={`/planet/:${planet.url.split('/')[5]}/?page=${currPage}`}
//                     onClick={() =>
//                       navigate(`/planet/:${planet.url.split('/')[5]}`)
//                     }
//                     onClickCapture={goBack}
//                   >
//                     <button className={style.learnMoreBtn} type="button">
//                       Learn More
//                     </button>
//                   </Link> */}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//         {/* <Outlet /> */}
//       </div>
//     </>
//   );
// }

// export default SearchPage;

// import { useAppSelector } from '../../hooks'; // Adjust the import as needed
// import Input from '../input/Input';
// import Cards from '../cards/Cards';
// import Spinner from '../spinner/Spinner';
// import { IPlanetMain } from '../../utils/interface';
// import style from './search_page.module.css';
// import styles from '../cards/cards.module.css';

interface SearchPageProps {
  initialData: object;
  currPage: number;
}

const SearchPage: React.FC<SearchPageProps> = ({ initialData }) => {
  return (
    <>
      <div className={style.headerWrapper}>
        <div>
          <Input />
        </div>
      </div>
      <Pagination />
      <div className={style.cardsWrapper}>
        {/* {initialData.isFetching ? (
          <Spinner />
        ) : ( */}
        <div className={style.commonWrapper}>
          {initialData?.results?.map((planet: IPlanetMain) => (
            <div className={styles.cardContainer} key={planet.name}>
              <Cards name={planet.name} url={planet.url} />
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default SearchPage;
