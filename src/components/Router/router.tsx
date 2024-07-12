import { createBrowserRouter } from 'react-router-dom';
import Links from './links';
import App from '../../App';
import CardDetails from '../ui/DetailsPage/DetailsPage';
import NotFoundPage from '../ui/404Page/404Page';
import SearchPage from '../ui/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: Links.root,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: Links.detailsPage,
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;
