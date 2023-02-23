import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getContacts } from 'redux/contacts/operations';
import Header from 'components/Header/Header';
import Filter from 'components/Filter/Filter';
import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import UpdateContactForm from 'components/UpdateContactForm/UpdateContactForm';
import Modal from 'components/Modal/Modal';
import {
  toggleAddContactModal,
  toggleUpdateContactModal,
} from 'redux/global/slice';
import { Container } from '@material-ui/core';

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

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <Container>
        <Filter />
        {isAddContactModalOpen && (
          <Modal onClose={() => dispatch(toggleAddContactModal())}>
            <AddContactForm />
          </Modal>
        )}
        {isUpdateContactModalOpen && (
          <Modal onClose={() => dispatch(toggleUpdateContactModal())}>
            <UpdateContactForm />
          </Modal>
        )}
        <ContactsList />
      </Container>
    </div>
  );
};

export default Home;
