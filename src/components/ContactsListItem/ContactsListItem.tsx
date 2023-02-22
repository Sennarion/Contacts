import { useAppDispatch } from 'hooks';
import { deleteContact } from 'redux/contacts/operations';
import { setContactToUpdate } from 'redux/contacts/slice';
import { IContact } from 'types/types';

const ContactsListItem: React.FC<IContact> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
      <button
        type="button"
        onClick={() => dispatch(setContactToUpdate({ id, name, number }))}
      >
        Change
      </button>
    </li>
  );
};

export default ContactsListItem;
