import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { createContact } from 'redux/contacts/operations';
import { toggleAddContactModal } from 'redux/global/slice';
import { INewContact } from 'types/types';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';

const AddContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const contacts = useAppSelector(state => state.contacts.items);
  const isLoading = useAppSelector(state => state.contacts.isLoading);

  const [contact, setContact] = useState<INewContact>({
    name: '',
    number: '',
  });

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

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
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={6} width={{ xs: 340, sm: 400 }}>
        <Typography component="h2" variant="h5" align="center" mb={2}>
          Add new contact
        </Typography>
        <form onSubmit={onSubmit}>
          <Stack spacing={2}>
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
              inputRef={input}
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
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
    </Box>
  );
};

export default AddContactForm;
