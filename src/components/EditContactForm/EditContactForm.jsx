import { Box, Button, TextField } from '@mui/material';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { patchContact } from 'redux/contacts/operations';

const EditContactForm = ({ contactId, oldName, oldNumber }) => {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleEdit = async event => {
    event.preventDefault();
    try {
      await dispatch(patchContact({ contactId, name, number })).unwrap();
    } catch (error) {
      Notify.failure('Something with wrong with edit contact');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleEdit}
      sx={{
        width: '340px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <Box
        sx={{
          width: '340px',
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          type="text"
          name="name"
          value={name}
          placeholder="Input name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          fullWidth
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
        />
        <TextField
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9+]*',
          }}
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          fullWidth
          label="Number"
          placeholder="Input number"
          onChange={handleChange}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{ margin: '8px auto', display: 'block' }}
      >
        Edit contact
      </Button>
    </Box>
  );
};

export default EditContactForm;
