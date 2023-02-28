import { useAppDispatch, useAppSelector } from 'hooks';
import { deleteContact } from 'redux/contacts/operations';
import { setContactToUpdate } from 'redux/contacts/slice';
import { toggleUpdateContactModal } from 'redux/global/slice';
import { IContact } from 'types/types';
import {
  Button,
  ButtonGroup,
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';

const ContactsListItem: React.FC<IContact> = ({ id, name, number }) => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(state => state.contacts.isLoading);

  const onUpdateBtnClick = () => {
    dispatch(setContactToUpdate({ id, name, number }));
    dispatch(toggleUpdateContactModal());
  };

  return (
    <Grid item component="li" xs={12} sm={6} md={4} lg={3}>
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AccountCircleRoundedIcon fontSize="large" />
              <Typography component="p" variant="h6" noWrap>
                {name}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <PhoneAndroidRoundedIcon fontSize="large" />
              <Typography component="p" variant="h6">
                {number}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <ButtonGroup color="primary" fullWidth>
            <Button
              variant="contained"
              disableElevation
              startIcon={<ChangeCircleRoundedIcon />}
              onClick={onUpdateBtnClick}
            >
              Change
            </Button>
            <Button
              variant="outlined"
              color="error"
              disabled={isLoading}
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
