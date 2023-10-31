import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import Loader from './Loader/Loader';

const App = () => {
  return (
    <>
      {' '}
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
