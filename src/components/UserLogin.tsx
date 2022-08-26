import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import img from '../assets/LogoEdmil.png';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Loader } from '../utils/Loader';
import { apiLogin } from '../services/apiLogin';
import { Criptography } from '../utils/Cyrypto';
import { useNavigate } from 'react-router';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export function UserLogin() {
  const [codeuser, setCodeUser] = useState('');
  const [password, setPassword] = useState('');
  const [Circular, setCircular] = useState(false);

  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  async function sendData() {
    setCircular(true)
    try {
      if (codeuser == '' || password == '') {
        toast.error('Preencha todos os campos');
        setCircular(false)
      } else {
        const response = await apiLogin.post('/LoginEcom', {
          coduser: codeuser,
          password: password,
        });

        if (response.data.sucesso === true) {
          localStorage.setItem('token', Criptography('logado'));
          window.location.reload();
          setCircular(false)
        } else {
          toast.error('Erro ao realizar login');
          setPassword('');
          setCodeUser('');
          setCircular(false)
        }
      }
    } catch (error) {
      setCircular(false)
    }
  }

  return (
    <>
      <Loader Circular={Circular} />
      <Toaster position="bottom-left" reverseOrder={false} />

      <div
        style={{
          backgroundImage: 'linear-gradient(rgb(0, 0, 0), rgb(255, 0, 0) )',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            paddingTop: { xs: '3rem', md: '12px', xl: '50px' },
            paddingBottom: { xs: '3rem', md: '10px', xl: '50px' },
          }}
        >
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 200, md: 167 },
              maxWidth: { xs: 200, md: 250 },
              marginBottom: '25px',
            }}
            alt="The house from the offer."
            src={img}
          />
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '20px',
              paddingTop: '33px',
              position: 'sticky',
            }}
            boxShadow={3}
            alignItems="center"
            width={{ xs: '22rem', md: '35rem' }}
            height={{ xs: '18rem', md: '18rem' }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                marginBottom: '25px',
                fontWeight: 'bold',
              }}
              variant="h5"
            >
              Faça seu login
            </Typography>

            <TextField
              size="small"
              inputProps={{ maxLength: 18 }}
              value={codeuser}
              sx={{
                width: { xs: '15rem', md: '25rem' },
                marginBottom: '10px',
              }}
              label="Digite seu código"
              onChange={e => setCodeUser(e.target.value)}
            />
            <br />

            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="outlined-adornment-password">
                Digite sua senha
              </InputLabel>
              <OutlinedInput
                onKeyPress={e => {
                  let key = e.key;
                  if (key == 'Enter') {
                    sendData();
                  }
                }}
                sx={{
                  width: { xs: '15rem', md: '25rem' },
                  marginBottom: '15px',
                }}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Digite sua senha"
              />
            </FormControl>
            <Stack justifyContent="center" alignItems="center">
              <Button
                sx={{
                  width: '15rem',
                  height: '3rem',
                  marginBottom: '15px',
                }}
                variant="contained"
                color="secondary"
                onClick={sendData}
              >
                Entrar
              </Button>
            </Stack>
          </Box>
        </Box>
      </div>
    </>
  );
}
