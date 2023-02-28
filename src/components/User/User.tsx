import { useAppDispatch, useAppSelector } from 'hooks';
import { Stack, IconButton, Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { logout } from 'redux/auth/operations';

const User: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {!isMobile && <Typography>{user.name}</Typography>}
      {isMobile ? (
        <IconButton
          aria-label="logout"
          color="primary"
          onClick={() => dispatch(logout())}
        >
          <LogoutRoundedIcon />
        </IconButton>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          startIcon={<LogoutRoundedIcon />}
          onClick={() => dispatch(logout())}
        >
          logout
        </Button>
      )}
    </Stack>
  );
};

export default User;
