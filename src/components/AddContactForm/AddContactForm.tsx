import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createContact } from 'redux/contacts/operations';
import { toggleAddContactModal } from 'redux/global/slice';
import { INewContact } from 'types/types';
import { Button, TextField, Grid } from '@material-ui/core';

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
    dispatch(toggleAddContactModal());
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          type="text"
          name="name"
          label="Contact Name"
          variant="outlined"
          size="small"
          margin="normal"
          fullWidth
          value={contact.name}
          onChange={onChange}
          required
        />
        <TextField
          type="tel"
          name="number"
          label="Contact Number"
          variant="outlined"
          size="small"
          margin="normal"
          fullWidth
          value={contact.number}
          onChange={onChange}
          required
        />
        <Button
          type="button"
          variant="outlined"
          fullWidth
          onClick={() => dispatch(toggleAddContactModal())}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create
        </Button>
      </Grid>
    </form>
  );
};

export default AddContactForm;
