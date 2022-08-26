import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Decriptography } from './utils/Cyrypto';
import { NotFound } from './utils/NotFound';

const AppRoutes = () => {
  const token =  localStorage.getItem('token')
  const TokenDescripto = Decriptography(token ? token : '') 

  function PrivateRoute() {
    const location = useLocation();
    

    if (TokenDescripto == 'logado') {
      if (location.pathname === '/home') return <Outlet />;

      if (location.pathname === '/') return <Navigate to="home" />;

      return <Outlet />;
    } else {
      if (location.pathname !== '/') {
        return <Navigate to="/" />;
      } else {
        return <Outlet />;
      }
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
