import { Avatar, Box, Typography } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async userData => {
    try {
      await dispatch(logIn(userData)).unwrap();
      Notify.success(`Welcome!}`);
    } catch (error) {
      Notify.failure('Something with wrong with email or login!');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>

      <Typography
        variant="h1"
        sx={{
          fontSize: '32px',
          lineHeight: 1.5,
          textAlign: 'center',
          letterSpacing: `0.02em`,
          textTransform: 'capitalize',
          color: '#2e2f42ff',
          marginBottom: '16px',
        }}
      >
        Sign in
      </Typography>
      <LoginForm submitForm={handleSubmit} />
    </Box>
  );
};

export default Login;
