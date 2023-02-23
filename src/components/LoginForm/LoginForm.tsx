import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { login } from 'redux/auth/operations';
import { ILoginCredentials } from 'types/types';
import { Grid, Button, TextField } from '@mui/material';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<ILoginCredentials>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(user));
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            type="email"
            name="email"
            label="Email Address"
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            value={user.email}
            onChange={onChange}
            required
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            value={user.password}
            onChange={onChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign in
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
