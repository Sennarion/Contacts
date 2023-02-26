import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Typography,
  Box,
  Stack,
  Snackbar,
  Alert,
  AlertTitle,
} from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const Login: React.FC = () => {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(true);

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
    >
      <Stack
        p={4}
        borderRadius={2}
        spacing={2}
        boxShadow={{ sm: 2 }}
        width={{ xs: 340, sm: 400 }}
      >
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
    </Box>
  );
};

export default Login;
