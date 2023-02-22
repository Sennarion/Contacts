import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <p>LOADING...</p>
      ) : (
        <Suspense fallback={<p>LOADING...</p>}>
          <Routes>
            <Route path="/contacts" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/contacts" replace />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
