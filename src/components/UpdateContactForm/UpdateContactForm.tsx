import { useAppDispatch, useAppSelector } from 'hooks';
import { updateContact } from 'redux/contacts/operations';
import { setContactToUpdate } from 'redux/contacts/slice';

const UpdateContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const contacts = useAppSelector(state => state.contacts.items);
  const contactToUpdate = useAppSelector(
    state => state.contacts.contactToUpdate
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setContactToUpdate({
        ...contactToUpdate,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      contacts.some(prevContact => prevContact.name === contactToUpdate?.name)
    ) {
      alert('Error');
      return;
    }

    if (contactToUpdate) {
      const { id, name, number } = contactToUpdate;
      dispatch(updateContact({ id, name, number }));
    }

    e.currentTarget.reset();
  };

  if (!contactToUpdate) {
    return null;
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={contactToUpdate.name}
        onChange={onChange}
        required
      />
      <input
        type="tel"
        name="number"
        value={contactToUpdate.number}
        onChange={onChange}
        required
      />
      <button type="submit">Change</button>
    </form>
  );
};

export default UpdateContactForm;
