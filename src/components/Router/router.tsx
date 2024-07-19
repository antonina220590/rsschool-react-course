import { createBrowserRouter } from 'react-router-dom';
import Links from './links';
import App from '../../App';
import CardDetails from '../ui/DetailsPage/DetailsPage';
import NotFoundPage from '../ui/404Page/404Page';

const router = createBrowserRouter([
  {
    path: Links.root,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to={Links.mainPage} />,
      // },
      {
        path: Links.detailsPage,
        element: <CardDetails />,
      },
      {
        path: Links.notFoundPage,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
