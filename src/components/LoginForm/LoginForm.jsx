import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ submitForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    submitForm({ email, password });
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
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        placeholder="Input email"
        required
        label="Email"
        id="email"
        autoComplete="email"
        fullWidth
      />
      <TextField
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        required
        label="Password"
        placeholder="Input password"
        id="password"
        autoComplete="current-password"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ margin: '12px auto', display: 'block' }}
      >
        Sign In
      </Button>
      <Link to="/register" variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </Box>
  );
};

export default LoginForm;
