import React, { useCallback, useMemo, useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HEADER_TRANSLATION_PREFIX, MENU_TRANSLATION_PREFIX } from '../../utils/TranslationPrefixName';

export const Header = () => {


  const { t } = useTranslation(["layout", "menu"]);

  // bookmarks
  const bookmark = useSelector(state => state.bookmark.bookmarks);

  // navigate for page change
  const navigate = useNavigate();


  // Search Bar
  const searchChange = (event) => {
    console.log("file: Header.js:14 -> searchChange -> event", event.target.value);

  }


  // Menu Control
  const menu = useSelector(state => state.menu.menuLists);
  const [openListItems, setOpenListItems] = useState([]);
  const checkListItemOpen = (item) => openListItems.find(find => find === item.id);

  const handleClick = ({ event, item }) => {
    console.log("file: Header.js:46 -> handleClick -> event, item ", event.target, item);
    if (item?.childrenLists) {

      // console.log("file: Header.js:54 -> handleClick -> openListItems", openListItems);
      let findOne = openListItems.find(find => find === item.id);

      if (findOne) {
        let temp = [...openListItems];
        temp = temp.filter(filter => filter !== item.id)
        // console.log("file: Header.js:59 -> handleClick -> temp", temp);
        setOpenListItems(temp);
      }
      else {
        setOpenListItems(prevState => [...prevState, item.id]);
      }
    } else {
      closeDrawer();
      navigate(item.url);
    }
    // setOpen(!open);
  };

 

  const showMenuList = useMemo(() => {
    return <List sx={{ width: { xs: '275px', sm: '100%' } }}>
      {
        menu?.map(item => {
          if (item?.childrenLists) {
            return <Box key={item.id} className={classess.ListItem}>
              <ListItemButton onClick={(event) => handleClick({ event, item })}>
                <ListItemText>
                  {t(MENU_TRANSLATION_PREFIX + item.translateName, { ns: 'menu' })}
                </ListItemText>
                {checkListItemOpen(item) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={checkListItemOpen(item)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item?.childrenLists?.map(subItem => {
                    return <ListItemButton key={subItem.id} sx={{ pl: 4 }} onClick={(event) => handleClick({ event, item: subItem })}>
                      <ListItemText>
                        {t(MENU_TRANSLATION_PREFIX + subItem.translateName, { ns: 'menu' })}
                      </ListItemText>
                    </ListItemButton>
                  })}

                </List>
              </Collapse>
            </Box>
          } else {
            return <ListItemButton className={classess.ListItem} key={item.id} onClick={(event) => handleClick({ event, item })} >
              <ListItemText>

                {t(MENU_TRANSLATION_PREFIX + item.translateName, { ns: 'menu' })}


              </ListItemText>
            </ListItemButton>
          }
        })

      }
    </List>
  }, [menu, openListItems])




  // Drawer Control
  const [drawer, setDrawer] = useState(false);
  const openDrawer = useCallback(() => setDrawer(true), []);
  const closeDrawer = useCallback(() => setDrawer(false), []);

  return (
    <Box>
      <Grid container className={classess.bg} sx={{ alignItems: { sm: 'center', md: 'end' } }}>
        <Grid item xs={4} sm={4} md={0} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
          <Button onClick={openDrawer}><MenuIcon fontSize='large' sx={{ color: 'black' }} /></Button>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <CardMedia component="img" src={Logo} sx={{ width: { xs: '100%', sm: '100%', md: '173px' }, height: '100%', objectFit: 'contain' }} />
        </Grid>
        <Grid item xs={0} sm={0} md={4}>
          <Typography variant="h6" className={classess.title} gutterBottom sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            {t(HEADER_TRANSLATION_PREFIX + "title", { ns: 'layout' })}
          </Typography>
        </Grid>
        <Grid item xs={0} sm={0} md={4} className={classess.searchBox} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          {/* <InputElement name='searchKeyword' onChange={searchChange} /> */}
          {/* <Button size="small" variant="contained"><SearchIcon/></Button> */}
        </Grid>
      </Grid>
      <Drawer
        open={drawer}
        onClose={closeDrawer}
        className={classess.drawer}
      >
        {showMenuList}
      </Drawer>


    </Box>
  )
}
