import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Box, Stack } from '@mui/material';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';

const Register: React.FC = () => {
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
          <PersonAddRoundedIcon
            color="primary"
            sx={{ width: '80px', height: '80px' }}
          />
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
    </Box>
  );
};

export default Register;
