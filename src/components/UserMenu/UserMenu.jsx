import { Box, Button } from '@mui/material';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    user && (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Button
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
          onClick={() => {
            Notify.success(`Goodbye, ${user.name}`);
            dispatch(logOut());
            navigate('/');
          }}
        >
          Logout
        </Button>
      </Box>
    )
  );
};

export default UserMenu;
