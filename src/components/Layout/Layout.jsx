import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 'calc(100% - 40px)',
          margin: '20px auto 20px',
          padding: '20px',
          backgroundColor: `#f4f4fdff`,
          borderRadius: '20px',
          border: `1px solid #2e2f4266`,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
