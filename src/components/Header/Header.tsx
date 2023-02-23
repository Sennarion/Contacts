import { useAppDispatch, useAppSelector } from 'hooks';
import { logout } from 'redux/auth/operations';
import { toggleAddContactModal } from 'redux/global/slice';
import { Button, Typography, Container } from '@material-ui/core';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);

  return (
    <header>
      <Container>
        <Typography>{user.name}</Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          startIcon={<AddCircleRoundedIcon />}
          onClick={() => dispatch(toggleAddContactModal())}
        >
          Add contact
        </Button>
        <Button
          type="button"
          variant="outlined"
          startIcon={<LogoutRoundedIcon />}
          onClick={() => dispatch(logout())}
        >
          logout
        </Button>
      </Container>
    </header>
  );
};

export default Header;
