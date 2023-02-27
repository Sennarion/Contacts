import { useAppSelector } from 'hooks';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';
import { Grid, Box } from '@mui/material';
import Filter from 'components/Filter/Filter';

const ContactsList: React.FC = () => {
  const contacts = useAppSelector(state => state.contacts.items);
  const filter = useAppSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name
      .trim()
      .toLocaleLowerCase()
      .includes(filter.trim().toLocaleLowerCase())
  );

  return (
    <Box component="main">
      <Filter />
      <Grid container component="ul" spacing={4}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsListItem key={id} id={id} name={name} number={number} />
          );
        })}
      </Grid>
    </Box>
  );
};

export default ContactsList;
