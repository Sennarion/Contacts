import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import Header from 'components/Header/Header';

const SharedLayout: React.FC = () => {
  const isRefreshing = useAppSelector(state => state.auth.isRefreshing);

  return (
    <>
      {isRefreshing ? (
        <p>LOADING...</p>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

export default SharedLayout;
