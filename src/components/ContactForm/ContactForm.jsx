import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Notify } from 'notiflix';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const isTrue = contacts.some(contact => contact.name === name);
    if (isTrue) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    try {
      await dispatch(addContact({ name, number })).unwrap();
      dispatch(fetchContacts());
      setName('');
      setNumber('');
      form.reset();
    } catch (error) {
      Notify.failure('Something with wrong with submit contact')
    }
  };

  return (
    <Box>
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
        Registration contact
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <TextField
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Input name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          fullWidth
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <TextField
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9+]*',
          }}
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          fullWidth
          label="Number"
          placeholder="Input number"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ margin: '12px auto', display: 'block' }}
        >
          Add contact
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
