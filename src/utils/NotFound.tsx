import { Box, Button, Stack, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../assets/404.json';
import { useNavigate } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

export function NotFound() {
  let navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          top: 50,
          textAlign: 'center',
          a: { textDecoration: 'none', color: '#FFF' },
        }}
      >
        <Lottie options={defaultOptions} width={200} />
        <Typography variant="h6" gutterBottom component="div">
          Ops... <br />
          Não foi possivel carregar os dados <br />
          Entre em contato com a central de atendimento:
        </Typography>
        <Box
          sx={{
            flexDirection: 'row',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Button onClick={() => navigate("/")} sx={{marginRight: '10px'}}  size="small" variant="contained" color="success" >
            <a href="http://wa.me/5535998099853" target="_blank">
              <BsWhatsapp />
              Whatsapp
            </a>
          </Button>
          <Button onClick={() => navigate("/")} variant="contained" color="primary">
            <a
              href="mailto:centraldeatendimento@lojasedmil.com.br"
              target="_blank"
            >
              <MdMail />
              E-mail
            </a>
          </Button>
        </Box>
      </Box>
    </>
  );
}
