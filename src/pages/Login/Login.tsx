import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Typography,
  Stack,
  Snackbar,
  Alert,
  AlertTitle,
} from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { clearError } from 'redux/auth/slice';
import { LoginForm, Background } from 'components';

const Login: React.FC = () => {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(true);

  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const errorStatus = useAppSelector(state => state.auth.error);

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  const clearErrorStatus = () => {
    dispatch(clearError());
  };

  return (
    <Background>
      <Stack
        p={4}
        borderRadius={2}
        spacing={2}
        boxShadow={{ sm: 2 }}
        width={{ xs: 340, sm: 400 }}
        bgcolor="#fff"
      >
        <Stack spacing={2} alignItems="center">
          <PersonRoundedIcon color="primary" sx={{ fontSize: 80 }} />
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
      <Snackbar open={isSnackBarOpen}>
        <Alert
          severity="info"
          variant="filled"
          onClose={() => setIsSnackBarOpen(false)}
        >
          <AlertTitle>Welcome!</AlertTitle>
          <p>
            If you're feeling lazy to register, you can use a public account to
            log in:
          </p>
          <p>Email: testaccount@mail.com</p>
          <p>Password: testtest12</p>
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorStatus !== null}
        autoHideDuration={3000}
        onClose={clearErrorStatus}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={clearErrorStatus} severity="error">
          {errorStatus as string}
        </Alert>
      </Snackbar>
    </Background>
  );
};

export default Login;
