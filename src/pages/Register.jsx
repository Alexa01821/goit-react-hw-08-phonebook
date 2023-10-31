import { Avatar, Box, Typography } from '@mui/material';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async credentials => {
    try {
      await dispatch(register({ credentials })).unwrap();
      Notify.success(`Welcome, ${user}`);
    } catch (error) {
      Notify.failure('Something with wrong with register!');
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
        Sign up
      </Typography>
      <RegisterForm submitForm={handleSubmit} />
    </Box>
  );
};

export default Register;
