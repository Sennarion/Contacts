import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { register } from 'redux/auth/operations';
import { Button, TextField, Grid } from '@material-ui/core';

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();

  interface IUser {
    name: string;
    email: string;
    password: string;
  }

  const [user, setUser] = useState<IUser>({
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
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          type="text"
          name="name"
          label="User Name"
          variant="outlined"
          size="small"
          margin="normal"
          fullWidth
          value={user.name}
          onChange={onChange}
          required
        />
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
          Sign up
        </Button>
      </Grid>
    </form>
  );
};

export default RegisterForm;
