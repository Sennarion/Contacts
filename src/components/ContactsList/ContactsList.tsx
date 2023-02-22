import { useAppSelector } from 'hooks';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

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
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        );
      })}
    </ul>
  );
};

export default ContactsList;
