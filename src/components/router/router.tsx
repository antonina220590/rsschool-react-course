import { createBrowserRouter } from 'react-router-dom';
import Links from './links';
import App from '../../App';
import ReactHooksForms from '../ui/reactHookForms/reactHookFroms';
import UncontrolledForms from '../ui/uncontrolledForms/uncontrolledForms';

const router = createBrowserRouter([
  {
    path: Links.root,
    element: <App />,
  },
  {
    path: Links.reactHooksForms,
    element: <ReactHooksForms />,
  },
  {
    path: Links.uncontrolledPage,
    element: <UncontrolledForms />,
  },
]);

export default router;
