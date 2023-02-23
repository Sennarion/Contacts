import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { updateContact } from 'redux/contacts/operations';
import { toggleUpdateContactModal } from 'redux/global/slice';
import { IContact } from 'types/types';
import { Button, TextField, Grid } from '@mui/material';

const UpdateContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const contacts = useAppSelector(state => state.contacts.items);
  const contactToUpdate = useAppSelector(
    state => state.contacts.contactToUpdate
  );

  const [updatedContact, setUpdatedContact] =
    useState<IContact>(contactToUpdate);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedContact({
      ...updatedContact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === updatedContact.name)) {
      alert('Error');
      return;
    }

    dispatch(updateContact(updatedContact));
    dispatch(toggleUpdateContactModal());
  };

  if (!contactToUpdate) {
    return null;
  }

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
          label="Change Name"
          variant="outlined"
          size="small"
          margin="normal"
          fullWidth
          value={updatedContact.name}
          onChange={onChange}
          required
        />
        <TextField
          type="tel"
          name="number"
          label="Change Name"
          variant="outlined"
          size="small"
          margin="normal"
          fullWidth
          value={updatedContact.number}
          onChange={onChange}
          required
        />
        <Button
          type="button"
          variant="outlined"
          fullWidth
          onClick={() => dispatch(toggleUpdateContactModal())}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Change
        </Button>
      </Grid>
    </form>
  );
};

export default UpdateContactForm;
