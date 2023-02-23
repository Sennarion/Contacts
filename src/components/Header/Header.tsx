import { useAppDispatch, useAppSelector } from 'hooks';
import { logout } from 'redux/auth/operations';
import { toggleAddContactModal } from 'redux/global/slice';
import { Button, Typography, Container, Box } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);

  return (
    <Box component="header" pt={4} pb={4} bgcolor="#222">
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between">
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
            color="secondary"
            startIcon={<LogoutRoundedIcon />}
            onClick={() => dispatch(logout())}
          >
            logout
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
