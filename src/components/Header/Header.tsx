import { Container, Box, Stack } from '@mui/material';
import User from 'components/User/User';
import Logo from 'components/Logo/Logo';

const Header: React.FC = () => {
  return (
    <Box component="header" pt={4} pb={4} boxShadow={1}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo />
          <User />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
