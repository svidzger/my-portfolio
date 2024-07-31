import { createBrowserRouter } from 'react-router-dom';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../components/Layout';

export const navbarRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
