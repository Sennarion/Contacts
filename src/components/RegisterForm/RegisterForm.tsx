import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { register } from 'redux/auth/operations';
import { IRegisterCredentials } from 'types/types';
import { Button, TextField, Stack } from '@mui/material';

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<IRegisterCredentials>({
    name: '',
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
    dispatch(register(user));
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          type="text"
          name="name"
          label="User Name"
          variant="outlined"
          size="small"
          fullWidth
          value={user.name}
          onChange={onChange}
          required
          autoComplete="off"
        />
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
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign up
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
