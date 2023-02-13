import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ClearIcon from '@mui/icons-material/Clear';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import Logo from '../../asserts/logo.png';
import InputElement from '../../components/InputElement';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HEADER_TRANSLATION_PREFIX, MENU_TRANSLATION_PREFIX } from '../../utils/TranslationPrefixName';
import { removeBookmark } from '../../redux/reducers/bookmarkSlice';

export const Header = () => {


  const { t } = useTranslation(["layout", "menu"]);

  // navigate for page change
  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useDispatch();

  const bookmark = useSelector(state => state.bookmark.bookmarks);
  const menu = useSelector(state => state.menu.menuLists);
  const firstSearch = useSelector(state => state.menu.firstSearch);

  // Search Bar
  const searchChange = (event) => {
    console.log("file: Header.js:14 -> searchChange -> event", event.target.value);

  }

  // bookmarks Control, Bookmark Drawer Control
  const checkBookmark = useMemo(() => bookmark?.length >= 1, [bookmark])
  const [bookmarkDrawer, setBookmarkDrawer] = useState(false);
  const openBookmarkDrawer = useCallback(() => setBookmarkDrawer(true), []);
  const closeBookmarkDrawer = useCallback(() => setBookmarkDrawer(false), []);

  const bookmarkClickHandler = ({ event, item }) => {
    if (item?.url) {
      closeBookmarkDrawer();
      navigate(item?.url);
    }
  }
  const bookmarkDelClickHandler = ({ event, item }) => {
    // console.log("file: Header.js:62 -> bookmarkDelClickHandler -> item", item)

    dispatch(removeBookmark(item?.url));
  }

  const bookmarkToListByMenuList = useMemo(() => {
    let tempBookmarks = [...bookmark];
    let tempList = [];
    if (menu) {
      // console.log("file: Menu.js:65 -> bookmarkToListByMenuList -> tempBookmarks", tempBookmarks)
      menu.forEach(item => {
        let findMenuItem = tempBookmarks?.find(find => find === item?.url);
        if (findMenuItem) {
          tempList?.push(item);
          tempBookmarks = tempBookmarks?.filter(filter => filter !== findMenuItem);
        }
        if (item?.childrenLists) {
          let findMenuItemChildren = item?.childrenLists?.find(find => {
            let findChild = tempBookmarks.find(marks => marks === find?.url);
            if (findChild) {
              return find;
            }
            return false;
          })
          if (findMenuItemChildren) {

            tempList?.push(findMenuItemChildren);
            tempBookmarks = tempBookmarks?.filter(filter => filter !== findMenuItemChildren?.url);
          }
        }

      });
      // console.log("file: Menu.js:66 -> bookmarkToListByMenuList -> tempList", tempList)
      return tempList;
    }
  }, [menu, bookmark])

  const showBookmarkList = useMemo(() => {
    if (bookmarkToListByMenuList) {
      return bookmarkToListByMenuList?.map(item => {
        return <Box key={item.id} className={classess.ListItem}>
          <Grid container alignItems={"center"} >
            <Grid item xs={9}>
              <ListItemButton onClick={(event) => bookmarkClickHandler({ event, item })} >
                <ListItemText>
                  {t(MENU_TRANSLATION_PREFIX + item.translateName, { ns: 'menu' })}
                </ListItemText>
              </ListItemButton>
            </Grid>
            <Grid item xs={3} textAlign='right' sx={{ paddingRight: '16px' }}>
              <Button
                variant="contained"
                onClick={(event) => bookmarkDelClickHandler({ event, item })}
                sx={{
                  background: "linear-gradient(180deg, rgb(255, 196, 0) 10%, rgb(246, 143, 40) 100%)",
                  fontWeight: 'bold'
                }}
              >
                Del
              </Button>
            </Grid>
          </Grid>
        </Box >
      })
    }
  }, [bookmarkToListByMenuList])

  // Check bookmark length 
  useEffect(() => {
    if (!checkBookmark) {
      closeBookmarkDrawer();
    }
  }, [checkBookmark])



  // Menu Control, Page Drawer Control
  const [pageDrawer, setPageDrawer] = useState(false);
  const openPageDrawer = useCallback(() => setPageDrawer(true), []);
  const closePageDrawer = useCallback(() => setPageDrawer(false), []);

  const [openListItems, setOpenListItems] = useState([]);
  const checkListItemOpen = (item) => !!openListItems.find(find => find === item.id);


  const handleClick = ({ event, item }) => {
    //console.log("file: Header.js:46 -> handleClick -> event, item ", event.target, item);
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
      closePageDrawer();
      navigate(item.url);
    }
    // setOpen(!open);
  };

  const openAllHandler = useCallback(() => {
    if (menu) {
      let parents = [];
      menu?.forEach(element => {
        if (element?.childrenLists) {
          parents.push(element?.id)
        }
      });

      if (openListItems?.length === 0) {
        setOpenListItems(parents);
      } else {
        setOpenListItems([]);
      }

    }
  }, [menu, openListItems]);


  const showMenuList = useMemo(() => {
    return <List sx={{ width: { xs: '275px', sm: '100%' } }}>
      {
        menu?.map(item => {
          if (item?.childrenLists) {
            return <Box key={item.id} className={`${classess.ListItem} `}>
              <ListItemButton onClick={(event) => handleClick({ event, item })} className={`${location?.pathname === item?.url ? classess.selectedMenu : ''}`}>
                <ListItemText>
                  {t(MENU_TRANSLATION_PREFIX + item.translateName, { ns: 'menu' })}
                </ListItemText>
                {checkListItemOpen(item) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={checkListItemOpen(item)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >
                  {item?.childrenLists?.map(subItem => {
                    return <ListItemButton
                      key={subItem.id}
                      className={`${location?.pathname === subItem?.url ? classess.selectedMenu : ''}`}
                      sx={{ pl: 4 }} onClick={(event) => handleClick({ event, item: subItem })}
                    >
                      <ListItemText>
                        {t(MENU_TRANSLATION_PREFIX + subItem.translateName, { ns: 'menu' })}
                      </ListItemText>
                    </ListItemButton>
                  })}

                </List>
              </Collapse>
            </Box>
          } else {
            return <Box key={item.id} className={`${classess.ListItem} ${location?.pathname === item?.url ? classess.selectedMenu : ''}`}>
              <ListItemButton onClick={(event) => handleClick({ event, item })} >
                <ListItemText>
                  {t(MENU_TRANSLATION_PREFIX + item.translateName, { ns: 'menu' })}
                </ListItemText>
              </ListItemButton>
            </Box>
          }
        })

      }
    </List>
  }, [menu, openListItems, location])


  // Check Menu List Open
  useEffect(() => {
    if (firstSearch && menu) {
      let pathname = location?.pathname;
      if (menu) {
        let findMenu = menu?.forEach(each => {
          if (each?.url === pathname) {
            return each;
          } else {
            if (each?.childrenLists) {
              each?.childrenLists?.forEach(child => {
                if (child?.url === pathname) {
                  return child;
                }
              })
            }
            return false;
          }
        });
        if (findMenu) {
          
        }
      }
    }
  }, [firstSearch, menu])


  return (
    <Box>
      <Grid container className={classess.bg} sx={{ alignItems: { sm: 'center', md: 'end' } }}>
        <Grid item xs={4} sm={4} md={0} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
          <MenuIcon fontSize='large' sx={{ color: 'white', height: '100%' }} onClick={openPageDrawer} />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <CardMedia component="img" src={Logo} sx={{ width: { xs: '100%', sm: '100%', md: '173px' }, height: '100%', objectFit: 'contain' }} />
        </Grid>
        <Grid item xs={4} sm={4} md={0}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            textAlign: 'right',
          }}>
          <BookmarksIcon fontSize="medium" sx={{ color: checkBookmark ? 'white' : '#e3e3e3', height: '100%' }} onClick={() => { if (checkBookmark) { openBookmarkDrawer(); } }} />

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
        open={pageDrawer}
        onClose={closePageDrawer}
        className={classess.drawer}
      >
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(180deg, rgb(255, 196, 0) 10%, rgb(246, 143, 40) 100%)",
          }}
          onClick={openAllHandler}
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
            Open All
          </Typography>
        </Button>
        {showMenuList}
      </Drawer>
      <Drawer
        anchor="right"
        open={bookmarkDrawer}
        onClose={closeBookmarkDrawer}
        className={classess.drawer}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{
            textAlign: 'right',
            //  padding: '8px 16px' 
            width: '100%'
          }}>
            <Grid container justifyContent={"space-between"} alignItems={"center"}>
              <Grid item sx={{ padding: '6px 0 0 16px' }}>

                <Typography variant='h5' sx={{ fontWeight: '600' }}>Bookmarks</Typography>
              </Grid>
              <Grid item >

                <ClearIcon
                  fontSize="large"
                  sx={{
                    padding: '6px 11px 0 0 ', '&:hover': { cursor: 'pointer' }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeBookmarkDrawer();
                  }}
                />
              </Grid>
            </Grid>

          </Box>
          <Box sx={{ width: '100%' }}>

            {showBookmarkList}
          </Box>

        </Box>

      </Drawer>


    </Box>
  )
}
