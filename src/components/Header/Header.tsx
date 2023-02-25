import { useAppDispatch, useAppSelector } from 'hooks';
import { logout } from 'redux/auth/operations';
import { Button, Typography, Container, Box, Stack } from '@mui/material';
import Filter from 'components/Filter/Filter';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);

  return (
    <Box component="header" pt={4} pb={4} bgcolor="#91b7f2">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <RecentActorsIcon fontSize="large" />
            <Typography component="h1" variant="h5">
              ContactsHub
            </Typography>
          </Stack>
          <Filter />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>{user.name}</Typography>
            <Button
              type="button"
              variant="outlined"
              color="primary"
              startIcon={<LogoutRoundedIcon />}
              onClick={() => dispatch(logout())}
            >
              logout
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
