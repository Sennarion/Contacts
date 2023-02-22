import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createContact } from 'redux/contacts/operations';
import { INewContact } from 'types/types';

const AddContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const contacts = useAppSelector(state => state.contacts.items);

  const [contact, setContact] = useState<INewContact>({
    name: '',
    number: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contacts.some(prevContact => prevContact.name === contact.name)) {
      alert('Error');
      return;
    }

    dispatch(createContact(contact));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={onChange}
        required
      />
      <input
        type="tel"
        name="number"
        value={contact.number}
        onChange={onChange}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddContactForm;
