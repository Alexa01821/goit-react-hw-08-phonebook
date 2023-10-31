import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
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
        color="inherit"
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </Button>

      <Button
        color="inherit"
        onClick={() => {
          navigate('contacts');
        }}
      >
        Contacts
      </Button>
    </Box>
  );
};

export default Navigation;
