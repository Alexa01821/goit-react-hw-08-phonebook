import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthNav = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Button
        onClick={() => {
          navigate('login');
        }}
        color="inherit"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Login
      </Button>

      <Button
        onClick={() => {
          navigate('register');
        }}
        color="inherit"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default AuthNav;
