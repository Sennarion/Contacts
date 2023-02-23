import { useAppDispatch } from 'hooks';
import { deleteContact } from 'redux/contacts/operations';
import { setContactToUpdate } from 'redux/contacts/slice';
import { toggleUpdateContactModal } from 'redux/global/slice';
import { IContact } from 'types/types';
import {
  Button,
  ButtonGroup,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';

const ContactsListItem: React.FC<IContact> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();

  const onUpdateBtnClick = () => {
    dispatch(setContactToUpdate({ id, name, number }));
    dispatch(toggleUpdateContactModal());
  };

  return (
    <Grid item component="li" xs={12} sm={4}>
      <Card variant="outlined">
        <CardContent>
          <Typography>Name: {name}</Typography>
          <Typography>Number: {number}</Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup color="primary" fullWidth>
            <Button
              type="button"
              variant="contained"
              disableElevation
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
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactsListItem;
