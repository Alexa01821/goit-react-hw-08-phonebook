import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Navigation from 'components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Book } from '@mui/icons-material';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            onClick={() => {
              navigate('/');
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Book sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PhoneBook
            </Typography>
          </Box>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
