import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createContact } from 'redux/contacts/operations';
import { toggleAddContactModal } from 'redux/global/slice';
import { INewContact } from 'types/types';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';

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
    <Box p={6}>
      <Typography component="h2" variant="h5" align="center" mb={2}>
        Update contact
      </Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={2} minWidth="350px">
          <TextField
            type="text"
            name="name"
            label="Contact Name"
            variant="outlined"
            size="small"
            fullWidth
            value={contact.name}
            onChange={onChange}
            required
            autoFocus
          />
          <TextField
            type="tel"
            name="number"
            label="Contact Number"
            variant="outlined"
            size="small"
            fullWidth
            value={contact.number}
            onChange={onChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            onClick={() => dispatch(toggleAddContactModal())}
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddContactForm;
