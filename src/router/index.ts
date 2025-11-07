import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import Parking from '../app/Parking';

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Parking,
      },
    ],
  },
]);
