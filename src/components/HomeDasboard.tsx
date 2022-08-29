import Box from '@mui/material/Box';
import logo from '../assets/LogoEdmil.png';

export function HomeDashboard() {
  
  return (
    <>
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row'>
      <Box
      component="img"
      sx={{
        width: '52%',
      }}
      alt="logo"
      src={logo}
    />
    </Box>
    </>
  );
}
