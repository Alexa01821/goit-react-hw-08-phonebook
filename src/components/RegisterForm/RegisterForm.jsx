import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({ submitForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    else if (name === 'name') setName(value);
    else setPassword(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    submitForm({ name, email, password });
    setName();
    setEmail('');
    setPassword('');
    form.reset();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}
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
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        placeholder="Input email"
        required
        fullWidth
        label="Email"
        id="email"
        autoComplete="email"
      />
      <TextField
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        required
        label="Password"
        placeholder="Input password"
        fullWidth
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ margin: '12px auto', display: 'block' }}
      >
        Sign Up
      </Button>
      <Link to="/login" variant="body2">
        {"Don't have an account? Sign In"}
      </Link>
    </Box>
  );
};

export default RegisterForm;
