import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { updateContact } from 'redux/contacts/operations';
import { toggleUpdateContactModal } from 'redux/global/slice';
import { IContact } from 'types/types';
import { Box, Button, TextField, Stack, Typography } from '@mui/material';

const UpdateContactForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const contacts = useAppSelector(state => state.contacts.items);
  const contactToUpdate = useAppSelector(
    state => state.contacts.contactToUpdate
  );
  const isLoading = useAppSelector(state => state.contacts.isLoading);

  const [updatedContact, setUpdatedContact] =
    useState<IContact>(contactToUpdate);

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

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

  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={6} width={{ xs: 340, sm: 400 }}>
        <Typography component="h2" variant="h5" align="center" mb={2}>
          Update contact
        </Typography>
        <form onSubmit={onSubmit}>
          <Stack spacing={2}>
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
              inputRef={input}
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              Change
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => dispatch(toggleUpdateContactModal())}
            >
              Cancel
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default UpdateContactForm;
