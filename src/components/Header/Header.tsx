import { Container, Box, Stack } from '@mui/material';
import { User, Logo } from 'components';

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      pt={{ xs: 1, md: 3 }}
      pb={{ xs: 1, md: 3 }}
      boxShadow={1}
    >
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
