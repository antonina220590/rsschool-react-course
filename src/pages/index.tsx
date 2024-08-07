/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { GetServerSideProps } from 'next';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';
import SearchPage, {
  SearchPageProps,
} from '../components/ui/MainPage/SearchPage';
import { getAllPlanets } from '../lib/api/apiSlices';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = makeStore();
  const { query } = context;
  const page = query.page ? Number(query.page) : 1;
  await store.dispatch(getAllPlanets.initiate({ page, search: '' }));
  // console.log('page', query.page);

  const state = store.getState();
  // console.log('state', state);
  const result =
    state.api.queries[`getAllPlanets({"page":${page},"search":""})`];

  return {
    props: {
      initialData: result?.data,
      currPage: page,
    },
  };
};

const Home: React.FC<SearchPageProps> = (props) => {
  return (
    <Provider store={makeStore()}>
      <SearchPage {...props} />
    </Provider>
  );
};

const HomeWrapper: React.FC<SearchPageProps> = (props) => {
  return (
    <Provider store={makeStore()}>
      <Home {...props} />
    </Provider>
  );
};

export default HomeWrapper;

// const Home: React.FC<SearchPageProps> = (props) => {
//   console.log(props);
//   const store = makeStore();
//   return (
//     <Provider store={store}>
//       <SearchPage {...props} />
//     </Provider>
//   );
// };

// function HomeWrapper(props: SearchPageProps) {
//   console.log('test', props);
//   return (
//     <Provider store={makeStore()}>
//       <Home {...props} />
//     </Provider>
//   );
// }

// export default HomeWrapper;
