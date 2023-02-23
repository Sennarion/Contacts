import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Container, Avatar } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Login: React.FC = () => {
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
        Sign In
      </Typography>
      <LoginForm />
      <Typography align="center">
        Don't have an account?
        <Link component={RouterLink} to="/register">
          Sign Up
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
