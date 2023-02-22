import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <div>
      Register
      <RegisterForm />
    </div>
  );
};

export default Register;
