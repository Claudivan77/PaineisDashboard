import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Collapse, ListItem } from '@mui/material';
import { BiMenu } from 'react-icons/bi';
import { IoArrowBackOutline, IoExitOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/LogoEdmil.png';
import { HomeDashboard } from './HomeDasboard';
import {
  MdDashboard,
  MdDashboardCustomize,
  MdExpandLess,
  MdExpandMore,
  MdStarBorder,
} from 'react-icons/md';
import { NotPermission } from './NotPermission';
import { Dashboard } from './Dashboard';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function DrawerHome() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState('1');
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function exitPage() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: '#FF0000',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <BiMenu />
            </IconButton>
            <Box
              component="img"
              sx={{
                width: 150,
              }}
              alt="logo"
              src={logo}
            />
          </Box>

          <Button
            sx={{
              backgroundColor: '#AB0B0B',
              ':hover': { backgroundColor: '#8B0000' },
            }}
            size="small"
            variant="contained"
            onClick={exitPage}
          >
            Sair
            <IoExitOutline />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <IoArrowBackOutline />
            ) : (
              <IoArrowBackOutline />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AiOutlineHome />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  setShow('1');
                  handleDrawerClose();
                }}
                primary={'Inicio'}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  setShow('3');
                  handleDrawerClose();
                }}
                primary={'Simulador Preços V9'}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  setShow('4');
                  handleDrawerClose();
                }}
                primary={'Analise CMV - Comparacao'}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdDashboard />
              </ListItemIcon>
              <ListItemText
                onClick={() => {
                  setShow('5');
                  handleDrawerClose();
                }}
                primary={'Energia Fotovoltaica'}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <MdDashboardCustomize /> 
            </ListItemIcon>
            <ListItemText primary="PCE" />
            {openSubMenu ? <MdExpandLess /> : <MdExpandMore />}
          </ListItemButton>
          <Collapse in={openSubMenu}>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <ListItemIcon>
                    <MdDashboard />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => {
                      setShow('6');
                      handleDrawerClose();
                    }}
                    primary={'PCE - Produtividade WMS'}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MdDashboard />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => {
                      setShow('2');
                      handleDrawerClose();
                    }}
                    primary={'Relatorio Estoque Assistência'}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
          </Collapse>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {show == '1' ? (
          <HomeDashboard />
        ) : show == '2' ? (
          <Dashboard
            title="Assistencia"
            src="https://app.powerbi.com/reportEmbed?reportId=11bbbb06-87e6-4bba-8808-a1e1279ecdc6&autoAuth=true&ctid=a492ebf0-01aa-4c60-95b0-b5517b5127e1"
          />
        ) : show == '3' ? (
          <Dashboard
            title="Comercial"
            src="https://app.powerbi.com/reportEmbed?reportId=b23f6f88-7a6a-48c5-a1ba-f93c69394f9c&autoAuth=true&ctid=a492ebf0-01aa-4c60-95b0-b5517b5127e1"
          />
        ) : show == '4' ? (
          <Dashboard
            title="Financeiro"
            src="https://app.powerbi.com/reportEmbed?reportId=a8b25f3d-0431-4dc5-8194-c36527be3f6b&autoAuth=true&ctid=a492ebf0-01aa-4c60-95b0-b5517b5127e1"
          />
        ) : show == '5' ? (
          <Dashboard
            title="Gerencial"
            src="https://app.powerbi.com/reportEmbed?reportId=e94f0bbb-e0b7-4a7c-b735-f92b06c21624&autoAuth=true&ctid=a492ebf0-01aa-4c60-95b0-b5517b5127e1"
          />
        ) : show == '6' ? (
          <Dashboard
            title="PCE"
            src="https://app.powerbi.com/reportEmbed?reportId=d6fead5d-b89f-4885-b367-8b95bf1be54d&autoAuth=true&ctid=a492ebf0-01aa-4c60-95b0-b5517b5127e1"
          />
        ) : (
          <NotPermission />
        )}
      </Main>
    </Box>
  );
}
