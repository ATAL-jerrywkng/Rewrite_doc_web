import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { TreeItem, TreeView } from '@mui/lab';
import {
  Tab,
  Tabs,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

import classess from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';
import { MENU_TRANSLATION_PREFIX } from '../../utils/TranslationPrefixName';


import closeBook from '../../asserts/mo-tree-c.gif';
import openBook from '../../asserts/mo-tree-e.gif';
import treeQs from '../../asserts/mo-tree-t.gif';



export const Menu = () => {

  const { t } = useTranslation('menu');

  // menu 
  const menu = useSelector(state => state.menu.menuLists);
  // bookmarks
  const bookmark = useSelector(state => state.bookmark.bookmarks);

  // navigate for page change
  const navigate = useNavigate();

  // TreeView Control
  const [expanded, setExpanded] = useState([]);
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


  // show Index
  // const indexByMenuList = useMemo(() => {

  // }, [menu])


  const showTabContent = useMemo(() => {
    switch (selectedTabNumber) {
      case 0: {
        return <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<img src={openBook} />}
          defaultExpandIcon={<img src={closeBook} />}
          expanded={expanded}
          onNodeToggle={handleToggle}
          multiSelect
        >
          {menu?.map(item => {
            return <TreeItem
              key={item.id}
              icon={item?.icon === 'treeQs' ? <img src={treeQs} /> : null}
              nodeId={item.id}
              label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
              onClick={(event) => clickHandler({ event, item })}
            >
              {item?.childrenLists?.map(item =>
                <TreeItem
                  key={item.id}
                  icon={item?.icon === 'treeQs' ? <img src={treeQs} /> : null}
                  nodeId={item.id}
                  label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
                  onClick={(event) => clickHandler({ event, item })}
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
            return <TreeItem
              key={item.id}
              icon={<img src={treeQs} />} nodeId={item.id}
              label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
              onClick={(event) => clickHandler({ event, item })}
            ></TreeItem>
          })}
        </TreeView>
      }
    }
  }, [selectedTabNumber, expanded, menu, bookmarkToListByMenuList])





  return (

    <Box className={classess.menuContent}>
      <Tabs
        className={classess.tabs}
        value={selectedTabNumber}
        onChange={handleChange}
      >
        <Tab label="Contents" className={`${classess.tabItem} ${selectedTabNumber === 0 ? classess.selectedTab : ''}`} />
        {/* <Tab label="Index" className={`${classess.tabItem} ${selectedTabNumber === 1 ? classess.selectedTab : ''}`} /> */}
        <Tab label="Bookmarks" className={`${classess.tabItem} ${selectedTabNumber === 1 ? classess.selectedTab : ''}`} />
      </Tabs>
      {showTabContent}
    </Box>
  )
}
