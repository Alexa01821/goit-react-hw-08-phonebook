import { Book } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
        }}
      >
        <Book sx={{ color: '#404bbfff', fontSize: 36 }} />
        <Typography
          variant="h2"
          sx={{
            fontSize: '36px',
            lineHeight: 1.11,
            letterSpacing: `0.02em`,
            textTransform: 'capitalize',
            color: '#2e2f42ff',
          }}
        >
          PhoneBook
        </Typography>
      </Box>
      <section className="contact-registration">
        <ContactForm />
      </section>
      <section className="contacts">
        <Typography
          variant="h2"
          sx={{
            fontSize: '20px',
            lineHeight: 1.25,
            textAlign: 'center',
            letterSpacing: `0.02em`,
            textTransform: 'capitalize',
            color: '#2e2f42ff',
            marginBottom: '16px',
          }}
        >
          Contacts
        </Typography>
        <Filter />
        <ContactsList />
      </section>
      {error && Notify.failure('Something with wrong')}
    </Box>
  );
};

export default Contacts;
