import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TreeItem, TreeView } from '@mui/lab';
import {
  Tab,
  Tabs,
  Typography,
  Box,
  Button,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

import classess from './Menu.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { MENU_TRANSLATION_PREFIX } from '../../utils/TranslationPrefixName';


import closeBook from '../../asserts/mo-tree-c.gif';
import openBook from '../../asserts/mo-tree-e.gif';
import treeQs from '../../asserts/mo-tree-t.gif';
import { ContentTopBarButton } from '../../components/ContentTopBarButton';
import { setFirstSearch } from '../../redux/reducers/menuSlice';



export const Menu = () => {

  const { t } = useTranslation('menu');

  // menu 
  const menu = useSelector(state => state.menu.menuLists);
  // bookmarks
  const bookmark = useSelector(state => state.bookmark.bookmarks);

  // navigate for page change
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // TreeView Control
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const handleToggle = (event, nodeIds) => {
    // console.log("file: Menu.js:20 -> handleToggle -> nodeIds", nodeIds);
    // console.log("file: Menu.js:31 -> handleToggle -> event", event.target);
    // if (event.target.nodeName !== "svg" && event.target.nodeName !== "path") {

    // } else {
    setExpanded(nodeIds);
    // }
  };
  const clickHandler = ({ event, item }) => {
    // console.log("file: Menu.js:38 -> clickHandler -> event", event.target.nodeName)
    // console.log("file: Menu.js:36 -> clickHandler -> item", item)
    if (event.target.nodeName !== "svg" && event.target.nodeName !== "path") {
      navigate(item.url);
    }
  }
  // handle TreeView update when location update
  const firstSearch = useSelector(state => state.menu.firstSearch)
  useEffect(() => {
    // console.log("file: Menu.js:65 -> handleTreeViewUpdate -> menu", menu)

    if (menu && location && firstSearch) {
      let pathname = location?.pathname;
      // console.log("file: Menu.js:70 -> useEffect -> each?.url === selected", selected)
      menu.forEach(each => {
        if (each?.url === pathname) {
          //  console.log("file: Menu.js:70 -> useEffect -> each", each)
          // console.log("file: Menu.js:70 -> useEffect -> each?.url === selected", selected)
          setSelected([each?.id]);
          if (each?.childrenLists) {
            setExpanded([...expanded, each?.id]);
          }
          // else{
          //   let temp = [...expanded];
          //    setExpanded(prevState => prevState?.splice(temp?.indexOf(each?.id), 1));
          // }
        } else {
          if (each?.childrenLists) {
            // console.log("file: Menu.js:82 -> useEffect -> each?.childrenLists", each?.childrenLists)
            let findChild = each?.childrenLists?.find(find => find?.url === pathname);
            if (findChild) {
              setSelected([findChild?.id]);
              setExpanded([...expanded, each?.id]);
            }
          } else {
            // console.log("file: Menu.js:89 -> useEffect -> else")
            let temp = [...selected];
            // setSelected([each?.id]);
            setSelected(prevState => prevState?.splice(temp?.indexOf(each?.id), 1));
          }
        }
      })
      dispatch(setFirstSearch(false));
    }
  }, [menu, location, firstSearch])



  // Tabs Control 
  const [selectedTabNumber, setSelectedTabNumber] = useState(0);
  const handleChange = (event, newValue) => {
    // console.log("file: Menu.js:15 -> handleChange -> newValue", newValue);
    setSelectedTabNumber(newValue);
  };

  // show Bookmarks
  const bookmarkToListByMenuList = useMemo(() => {
    let tempBookmarks = [...bookmark];
    let tempList = [];
    if (menu) {
      // console.log("file: Menu.js:119 -> bookmarkToListByMenuList -> menu:", menu);
      // console.log("file: Menu.js:65 -> bookmarkToListByMenuList -> tempBookmarks", tempBookmarks);

      for (let i = 0; i < menu.length; i++) {
        // find parent menu url
        let findUrl = tempBookmarks?.find(find => find === menu[i]?.url);
        if (findUrl) {
          tempList.push(menu[i]);
          tempBookmarks = tempBookmarks.filter(filter => filter !== menu[i]?.url);
        }

        // console.log("file: Menu.js:65 -> bookmarkToListByMenuList -> tempBookmarks", tempBookmarks);
        // find children list menu 
        if (menu[i]?.childrenLists) {
          // find menu item 
          for (let j = 0; j < menu[i].childrenLists.length; j++) {
            let findChildrenUrl = tempBookmarks?.find(find => find === menu[i].childrenLists[j]?.url);
            if (findChildrenUrl) {
              tempList.push(menu[i].childrenLists[j]);
              tempBookmarks = tempBookmarks.filter(filter => filter !== menu[i].childrenLists[j]?.url);
            }
          }
        }


      }

      // console.log("file: Menu.js:66 -> bookmarkToListByMenuList -> tempList", tempList);
      return tempList;
    }
  }, [menu, bookmark])






  const showTabContent = useMemo(() => {
    switch (selectedTabNumber) {
      case 0: {
        return <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<img src={openBook} />}
          defaultExpandIcon={<img src={closeBook} />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          // multiSelect
          sx={{ overflow: 'hidden' }}
        >
          {menu?.map(item => {
            return <TreeItem
              key={item.id}
              icon={item?.icon === 'treeQs' ? <img src={treeQs} /> : null}
              nodeId={item.id}
              label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
              onClick={(event) => clickHandler({ event, item })}
              className={item?.childrenLists && item?.url === location?.pathname ? classess.selectParentMenuHaveChild : item?.url === location?.pathname ? classess.selectParentMenuNotHaveChild : ''}
            >
              {item?.childrenLists?.map(item =>
                <TreeItem
                  key={item.id}
                  icon={item?.icon === 'treeQs' ? <img src={treeQs} /> : null}
                  nodeId={item.id}
                  label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
                  onClick={(event) => clickHandler({ event, item })}
                  sx={{

                    backgroundColor: item?.url === location?.pathname ? 'rgba(25, 118, 210, 0.08)' : 'rgba(255, 255, 255, 0)'
                  }}
                />)}
            </TreeItem>
          }
          )}
        </TreeView>;

      }
      // case 1: {
      //   return;
      // }

      case 1: {
        return <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<img src={openBook} />}
          defaultExpandIcon={<img src={closeBook} />}
          expanded={expanded}
          onNodeToggle={handleToggle}
          multiSelect
        >
          {bookmarkToListByMenuList?.map(item => {
            // console.log("file: Menu.js:216 -> showTabContent -> item:", item)

            return <TreeItem
              key={item.id}
              icon={<img src={treeQs} />} nodeId={item.id}
              label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
              onClick={(event) => clickHandler({ event, item }, setSelectedTabNumber(0), dispatch(setFirstSearch(true)))}
            ></TreeItem>
          })}
        </TreeView>
      }
    }
  }, [selectedTabNumber, expanded, menu, bookmarkToListByMenuList, location])


  const handleExpandClick = useCallback(() => {

    if (menu) {
      // console.log("file: Menu.js:174 -> handleExpandClick -> menu", menu)
      let findAllParent = [];
      menu.forEach(each => {
        if (each?.childrenLists) {
          findAllParent?.push(each.id);
        }
      });
      // console.log("file: Menu.js:176 -> handleExpandClick -> findAllParent", findAllParent)

      let finalArr = null;
      if (expanded?.length === 0) {
        finalArr = findAllParent;
      } else {
        finalArr = [];
      }
      // console.log("file: Menu.js:191 -> handleExpandClick -> finalArr", finalArr)
      setExpanded(finalArr);
    }


  }, [menu, expanded])




  return (

    <Box className={classess.menuContent}>
      <Grid container className={classess.content}>
        <Grid item>
          <Tabs
            className={classess.tabs}
            value={selectedTabNumber}
            onChange={handleChange}
          >
            <Tab label="Contents" className={`${classess.tabItem} ${selectedTabNumber === 0 ? classess.selectedTab : ''}`} />
            {/* <Tab label="Index" className={`${classess.tabItem} ${selectedTabNumber === 1 ? classess.selectedTab : ''}`} /> */}
            <Tab label="Bookmarks" className={`${classess.tabItem} ${selectedTabNumber === 1 ? classess.selectedTab : ''}`} />

          </Tabs>
        </Grid>
        <Grid item>
          <ContentTopBarButton
            style={{ padding: '4px', margin: 0 }}
            onClick={handleExpandClick}
            disabled={selectedTabNumber !== 0}
          >
            {expanded?.length === 0 ? <UnfoldMoreIcon /> : <UnfoldLessIcon />}
          </ContentTopBarButton>
        </Grid>
      </Grid>


      {showTabContent}
    </Box>
  )
}
