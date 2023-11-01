import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Box, Typography } from '@mui/material';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);


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
