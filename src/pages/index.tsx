/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import { GetServerSideProps } from 'next';
import { Provider } from 'react-redux';
import { setupStore } from '../appStore/store';
import SearchPage from '../components/ui/MainPage/SearchPage';
import { getAllPlanets } from '../components/api/apiSlices';

interface SearchPageProps {
  initialData: object;
  currPage: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = setupStore();
  const { query } = context;
  const page = query.page ? Number(query.page) : 1;
  await store.dispatch(getAllPlanets.initiate({ page, search: '' }));

  const state = store.getState();
  const result =
    state.api.queries[`getAllPlanets({"page":${page},"search":""})`];

  return {
    props: {
      initialData: result?.data || {},
      currPage: page,
    },
  };
};

const Home: React.FC<SearchPageProps> = (props) => {
  const store = setupStore(props.initialData);
  return (
    <Provider store={store}>
      <SearchPage {...props} />
    </Provider>
  );
};

function HomeWrapper(props: object) {
  return (
    <Provider store={setupStore()}>
      <Home initialData={props} currPage={0} {...props} />
    </Provider>
  );
}

export default HomeWrapper;
