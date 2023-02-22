import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import LoginForm from 'components/LoginForm/LoginForm';

const Login: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <div>
      Login
      <LoginForm />
    </div>
  );
};

export default Login;
