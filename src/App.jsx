import { RouterProvider } from 'react-router-dom';
import { navbarRouter } from '../src/routes/routes';
import './styles/global.css';

const App = () => {
  return <RouterProvider router={navbarRouter} />;
};

export default App;
