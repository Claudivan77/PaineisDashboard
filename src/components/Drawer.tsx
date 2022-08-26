import { useEffect, useState } from 'react';
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
import { Button, ListItem, Menu } from '@mui/material';
import { BiMenu } from 'react-icons/bi';
import { IoArrowBackOutline, IoExitOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/LogoEdmil.png';
import { HomeDashboard } from './HomeDasboard';
import { MdDashboard } from 'react-icons/md';
import { NotPermission } from './NotPermission';
import { DashBoardAssistencia } from './DashBoardAssistencia';
import { DashBoardPCE } from './DashBoardPCE';
import { DashBoardFinanceiro } from './DashBoardFinanceiro';
import { DashBoardGerencial } from './DashBoardGerencial';
import { DashBoardComercial } from './DashBoardComercial';

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
                  setShow('2');
                  handleDrawerClose();
                }}
                primary={'Assistencia'}
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
                primary={'Dashboard'}
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
                primary={'Dashboard'}
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
                primary={'Dashboard'}
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
                  setShow('6');
                  handleDrawerClose();
                }}
                primary={'Dashboard'}
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
                  setShow('7');
                  handleDrawerClose();
                }}
                primary={'Dashboard'}
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
                  setShow('8');
                  handleDrawerClose();
                }}
                primary={'Dashboard'}
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
                  setShow('9');
                  handleDrawerClose();
                }}
                primary={'Dashboard'}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {show == '1' ? (
          <HomeDashboard />
        ) : show == '2' ? (
          <DashBoardAssistencia />
        ) : show == '3' ? (
          <DashBoardPCE />
        ) : show == '4' ? (
          <DashBoardFinanceiro />
        ) : show == '5' ? (
          <DashBoardGerencial />
        ) : show == '6' ? (
          <DashBoardComercial />
        ) : (
          <NotPermission />
        )}
      </Main>
    </Box>
  );
}
