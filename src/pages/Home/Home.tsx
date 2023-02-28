import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getContacts } from 'redux/contacts/operations';
import {
  toggleAddContactModal,
  toggleUpdateContactModal,
} from 'redux/global/slice';
import {
  Container,
  Box,
  Dialog,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  Header,
  AddContactForm,
  ContactsList,
  UpdateContactForm,
  Filter,
} from 'components';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const isAddContactModalOpen = useAppSelector(
    state => state.global.isAddContactModalOpen
  );
  const isUpdateContactModalOpen = useAppSelector(
    state => state.global.isUpdateContactModalOpen
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box>
      <Header />
      <Box component="main" pt={{ xs: 2, md: 4 }} pb={{ xs: 2, md: 4 }}>
        <Container>
          <Dialog
            fullScreen={isMobile}
            open={isAddContactModalOpen}
            onClose={() => dispatch(toggleAddContactModal())}
          >
            <AddContactForm />
          </Dialog>
          <Dialog
            fullScreen={isMobile}
            open={isUpdateContactModalOpen}
            onClose={() => dispatch(toggleUpdateContactModal())}
          >
            <UpdateContactForm />
          </Dialog>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={{ xs: 2, md: 4 }}
          >
            <Box width="50%">
              <Filter />
            </Box>
            {isMobile ? (
              <IconButton
                aria-label="add contact"
                color="primary"
                onClick={() => dispatch(toggleAddContactModal())}
              >
                <AddCircleRoundedIcon fontSize="large" />
              </IconButton>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleRoundedIcon />}
                onClick={() => dispatch(toggleAddContactModal())}
              >
                Add contact
              </Button>
            )}
          </Stack>
          <ContactsList />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
