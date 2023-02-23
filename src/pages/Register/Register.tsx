import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { Typography, Avatar, Container } from '@material-ui/core';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Register: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <Container maxWidth="xs">
      <Avatar>
        <AccountCircleRoundedIcon fontSize="large" color="primary" />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <RegisterForm />
      <Typography align="center">
        Already have an account?
        <Link component={RouterLink} to="/login">
          Sign In
        </Link>
      </Typography>
    </Container>
  );
};

export default Register;
