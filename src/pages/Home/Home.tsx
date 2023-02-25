import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getContacts } from 'redux/contacts/operations';
import Header from 'components/Header/Header';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';
import { Container, Box, Dialog, Button } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IContact } from 'types/types';

const Home: React.FC = () => {
  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false);
  const [isUpdateContactModalOpen, setIsUpdateContactModalOpen] =
    useState(false);
  const [contactToUpdate, setContactToUpdate] = useState<IContact>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box>
      <Header />
      <Box component="main" pt={4} pb={4}>
        <Container>
          <Dialog
            open={isAddContactModalOpen}
            onClose={() => setIsAddContactModalOpen(false)}
          >
            <AddContactForm />
          </Dialog>
          <Dialog
            open={isUpdateContactModalOpen}
            onClose={() => setIsUpdateContactModalOpen(false)}
          >
            <UpdateContactForm />
          </Dialog>
          <ContactsList />
          <Box position="absolute" bottom="40px" right="40px">
            <Button
              type="button"
              variant="contained"
              color="primary"
              startIcon={<AddCircleRoundedIcon />}
              onClick={() => setIsAddContactModalOpen(true)}
            >
              Add contact
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
