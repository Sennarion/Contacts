import { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { register } from 'redux/auth/operations';

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
      <input type="text" name="name" onChange={onChange} />
      <input type="email" name="email" onChange={onChange} />
      <input type="password" name="password" onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
