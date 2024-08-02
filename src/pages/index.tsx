import { Provider } from 'react-redux';
import { setupStore } from '../appStore/store';
import SearchPage from '../components/ui/MainPage/SearchPage';

export default function Home() {
  return (
    <Provider store={setupStore()}>
      <SearchPage />
    </Provider>
  );
}
