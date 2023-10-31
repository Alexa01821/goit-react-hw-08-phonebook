import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

const ContactsItem = ({ contactData: { id, name, number } }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async contactId => {
    try {
      await dispatch(deleteContact(contactId)).unwrap();
      dispatch(fetchContacts());
    } catch (error) {
      Notify.failure('Something with wrong with delete contact');
    }
  };

  const editChange = () => {
    setEdit(preEdit => {
      return !preEdit;
    });
  };

  return (
    <Box>
      <ListItem key={id} sx={{ minWidth: '320px' }}>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
        <Box sx={{ width: '85px', display: 'flex', flexDirection: 'column' }}>
          <Button
            sx={{
              fontSize: '10px',
              lineHeight: 1.25,
              color: '#FF6347',
            }}
            onClick={id => handleDelete(id)}
          >
            delete
          </Button>
          <Button
            sx={{
              fontSize: '10px',
              lineHeight: 1.25,
            }}
            onClick={editChange}
          >
            {edit ? 'cancel edit' : 'edit'}
          </Button>
        </Box>
      </ListItem>
      {edit && (
        <EditContactForm contactId={id} oldName={name} oldNumber={number} />
      )}
    </Box>
  );
};

export default ContactsItem;
