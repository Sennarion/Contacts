import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box, Stack } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const Login: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <Box
      minHeight="100vh"
      minWidth="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#91b7f2"
    >
      <Stack p={4} bgcolor="#fff" borderRadius={2} spacing={2}>
        <Stack spacing={2} alignItems="center">
          <PersonRoundedIcon
            color="primary"
            sx={{ width: '80px', height: '80px' }}
          />
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <LoginForm />
          <Typography align="center">
            <Typography component="span" mr={1}>
              Don't have an account?
            </Typography>
            <Link component={RouterLink} to="/register">
              Sign Up
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
