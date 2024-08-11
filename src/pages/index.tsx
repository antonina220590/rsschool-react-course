import { GetServerSidePropsContext } from 'next';
import SearchPage, {
  SearchPageProps,
} from '../components/ui/MainPage/SearchPage';
import { IResponseResult } from '../components/utils/interface';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const page = context.query.page ? Number(context.query.page) : 1;
  const search = context.query.search || '';
  if (Number.isNaN(page) || page < 1) {
    return {
      redirect: { destination: '/?page=1', permanent: false },
      props: {},
    };
  }
  try {
    const res = await fetch(
      `https://swapi.dev/api/planets/?search=${search}&page=${page}`
    );
    const repo: SearchPageProps = await res.json();
    return { props: { repo, page } };
  } catch (error) {
    Error('Failed to fetch data');
    return {
      props: {
        repo: {
          results: [],
        },
        page: 1,
      },
    };
  }
};

function Home({ repo, page }: { repo: IResponseResult; page: number }) {
  return <SearchPage initialData={repo} currPage={page} />;
}

export default Home;
