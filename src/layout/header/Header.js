import React, { useCallback, useState } from 'react';
import classess from './Header.module.scss';

import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  CardMedia,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


import Logo from '../../asserts/logo.png';
import InputElement from '../../components/InputElement';
import { Link } from 'react-router-dom';

export const Header = () => {

  const { t } = useTranslation("layout");

  // Search Bar
  const searchChange = (event) => {
    console.log("file: Header.js:14 -> searchChange -> event", event.target.value);

  }


  // Menu Control
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  // Drawer Control
  const [drawer, setDrawer] = useState(false);
  const openDrawer = useCallback(() => setDrawer(true), []);
  const closeDrawer = useCallback(() => setDrawer(false), []);

  return (
    <Box>
      <Grid container className={classess.bg} sx={{ alignItems: { xs: 'center', sm: 'end' } }}>
        <Grid item xs={4} sm={0} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Button onClick={openDrawer}><MenuIcon fontSize='large' sx={{ color: 'black' }} /></Button>
        </Grid>
        <Grid item xs={4} sm={4}>
          <CardMedia component="img" src={Logo} sx={{ width: { xs: '100%', sm: '173px' }, height: '100%', objectFit: 'contain' }} />
        </Grid>
        <Grid item xs={0} sm={4}>
          <Typography variant="h6" gutterBottom sx={{ display: { xs: 'none', sm: 'block' } }}>
            {t("header.title")}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={4} className={classess.searchBox} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <InputElement name='searchKeyword' onChange={searchChange} />
          {/* <Button size="small" variant="contained"><SearchIcon/></Button> */}
        </Grid>
      </Grid>
      <Drawer
        open={drawer}
        onClose={closeDrawer}
        className={classess.drawer}
      >
        <List sx={{ maxWidth: { xs: '250px', sm: '50%' } }}>
          <ListItemButton>
            <ListItemText>
              <Link to="/cover">
                Cover
              </Link>
            </ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>
              <Link to="#">關於安樂考勤/自墊費用報銷系統 (ECRS-Timesheet System)</Link>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>

            <ListItemText>
              <Link to="#">
                登入到系統
              </Link>
            </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText>
                  <Link to="#">
                    已擁有公司電郵地址的同事
                  </Link>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>

        </List>
      </Drawer>


    </Box>
  )
}
