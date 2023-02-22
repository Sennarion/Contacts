import { useAppSelector } from 'hooks';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

const ContactsList: React.FC = () => {
  const contacts = useAppSelector(state => state.contacts.items);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactsListItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactsList;
