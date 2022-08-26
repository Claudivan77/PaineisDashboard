import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { Theme } from './themes/Theme';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <AppRoutes />
          <GlobalStyles
            styles={{
              body: {
                fontFamily: 'Poppins',
              },
            }}
          />
        </ThemeProvider>
    </>
  );
}

export default App;
