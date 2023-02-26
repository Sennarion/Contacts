import { useAppDispatch, useAppSelector } from 'hooks';
import { setFilter } from 'redux/contacts/slice';
import { TextField, Box } from '@mui/material';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(state => state.contacts.filter);

  return (
    <Box>
      <TextField
        type="text"
        label="Find contacts by name"
        variant="outlined"
        size="small"
        fullWidth
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
};

export default Filter;
