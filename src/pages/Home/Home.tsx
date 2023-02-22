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

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      Filter
      <Filter />
      <Modal>
        <AddContactForm />
      </Modal>
      <Modal>
        <UpdateContactForm />
      </Modal>
      Contacts list
      <ContactsList />
    </div>
  );
};

export default Home;
