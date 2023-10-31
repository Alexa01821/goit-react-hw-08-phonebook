import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, Typography } from '@mui/material';
import ContactsItem from 'components/ContactsItem/ContactsItem';

const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ padding: '10px' }}>
      {visibleContacts.length === 0 ? (
        <Typography component="p" align="center">
          Your contact list is empty
        </Typography>
      ) : (
        visibleContacts.map(contact => {
          return <ContactsItem contactData={contact} key={contact.id} />;
        })
      )}
    </Box>
  );
};
export default ContactsList;
