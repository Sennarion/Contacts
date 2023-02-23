import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { updateContact } from 'redux/contacts/operations';
import { toggleUpdateContactModal } from 'redux/global/slice';
import { IContact } from 'types/types';
import { Button, TextField, Stack, Typography } from '@mui/material';

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
      <Stack spacing={2} minWidth="350px">
        <Typography component="h2" variant="h5" align="center" mb={2}>
          Update contact
        </Typography>
        <TextField
          type="text"
          name="name"
          label="Change Name"
          variant="outlined"
          size="small"
          fullWidth
          value={updatedContact.name}
          onChange={onChange}
          required
        />
        <TextField
          type="tel"
          name="number"
          label="Change Number"
          variant="outlined"
          size="small"
          fullWidth
          value={updatedContact.number}
          onChange={onChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Change
        </Button>
        <Button
          type="button"
          variant="outlined"
          fullWidth
          onClick={() => dispatch(toggleUpdateContactModal())}
        >
          Cancel
        </Button>
      </Stack>
    </form>
  );
};

export default UpdateContactForm;
