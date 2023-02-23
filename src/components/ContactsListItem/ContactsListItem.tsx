import { useAppDispatch } from 'hooks';
import { deleteContact } from 'redux/contacts/operations';
import { setContactToUpdate } from 'redux/contacts/slice';
import { toggleUpdateContactModal } from 'redux/global/slice';
import { IContact } from 'types/types';
import { Button, ButtonGroup, Typography } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';

const ContactsListItem: React.FC<IContact> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();

  const onUpdateBtnClick = () => {
    dispatch(setContactToUpdate({ id, name, number }));
    dispatch(toggleUpdateContactModal());
  };

  return (
    <li>
      <Typography>{name}</Typography>
      <Typography>{number}</Typography>
      <ButtonGroup color="primary">
        <Button
          type="button"
          variant="contained"
          startIcon={<ChangeCircleRoundedIcon />}
          onClick={onUpdateBtnClick}
        >
          Change
        </Button>
        <Button
          type="button"
          variant="outlined"
          startIcon={<DeleteRoundedIcon />}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </ButtonGroup>
    </li>
  );
};

export default ContactsListItem;
