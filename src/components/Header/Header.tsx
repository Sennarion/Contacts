import { useAppDispatch, useAppSelector } from 'hooks';
import { logout } from 'redux/auth/operations';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);

  return (
    <header>
      Header
      <span>{user.name}</span>
      <button onClick={() => dispatch(logout())}>logout</button>
    </header>
  );
};

export default Header;
