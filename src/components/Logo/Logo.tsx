import { Stack, Typography } from '@mui/material';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';

const Logo: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <ContactPhoneRoundedIcon fontSize="large" color="primary" />
      <Typography component="h1" variant="h6" color="primary">
        ContactsHub
      </Typography>
    </Stack>
  );
};

export default Logo;
