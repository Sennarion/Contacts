import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { login } from 'redux/auth/operations';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  interface IUser {
    email: string;
    password: string;
  }

  const [user, setUser] = useState<IUser>({ email: '', password: '' });

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
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={onChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
