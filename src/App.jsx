import { RouterProvider } from 'react-router-dom';
import { navbarRouter } from '../src/routes/routes';

const App = () => {
  return <RouterProvider router={navbarRouter} />;
};

export default App;
