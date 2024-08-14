import { createBrowserRouter } from 'react-router-dom';
import Links from './links';
import ReactHooksForms from '../ui/reactHookForms/reactHookFroms';
import UncontrolledForms from '../ui/uncontrolledForms/uncontrolledForms';
import Layout from '../layout/layout';
import MainPage from '../ui/mainPage/mainPage';

// const router = createBrowserRouter([
//   {
//     path: Links.root,
//     element: <App />,
//   },
//   {
//     path: Links.reactHooksForms,
//     element: <ReactHooksForms />,
//   },
//   {
//     path: Links.uncontrolledPage,
//     element: <UncontrolledForms />,
//   },
// ]);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: Links.reactHooksForms,
        element: <ReactHooksForms />,
      },
      {
        path: Links.uncontrolledPage,
        element: <UncontrolledForms />,
      },
    ],
  },
]);

export default router;
