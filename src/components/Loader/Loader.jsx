import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

const Loader = ()=>{
  const openLoader = useSelector(selectIsLoading);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={openLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader
