import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Stack, Alert, Snackbar } from '@mui/material';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { clearError } from 'redux/auth/slice';
import { RegisterForm, Background } from 'components';

const Register: React.FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const errorStatus = useAppSelector(state => state.auth.error);

  const clearErrorStatus = () => {
    dispatch(clearError());
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

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
          <PersonAddRoundedIcon color="primary" sx={{ fontSize: 80 }} />
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <RegisterForm />
          <Typography align="center">
            <Typography component="span" mr={1}>
              Already have an account?
            </Typography>
            <Link component={RouterLink} to="/login">
              Sign In
            </Link>
          </Typography>
        </Stack>
      </Stack>
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

export default Register;
