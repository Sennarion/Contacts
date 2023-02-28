import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { login } from 'redux/auth/operations';
import { ILoginCredentials } from 'types/types';
import { Button, TextField, Stack } from '@mui/material';

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
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          type="email"
          name="email"
          label="Email Address"
          variant="outlined"
          size="small"
          fullWidth
          value={user.email}
          onChange={onChange}
          required
          autoComplete="off"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          value={user.password}
          onChange={onChange}
          required
          autoComplete="off"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
