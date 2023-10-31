import { Book } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px'
      }}
    >
      {isLoggedIn ? (
        <Typography variant="h2"> Welcome, {user.name}, to </Typography>
      ) : (
        <Typography variant="h2"> Welcome to</Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Book sx={{ color: '#404bbfff', fontSize: 80, marginLeft: '20px' }} />
        <Typography variant="h1" component="h1">
          PhoneBook App
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
