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

export const Menu = () => {

  const { t } = useTranslation('menu');

  // menu 
  const menu = useSelector(state => state.menu.menuLists);

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



  const showTabContent = useMemo(() => {
    switch (selectedTabNumber) {
      case 0: {
        return <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          onNodeToggle={handleToggle}
          multiSelect
        >
          {menu?.map(item => {
            return <TreeItem
              key={item.id}
              icon={item?.icon} nodeId={item.id}
              label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
              onClick={(event) => clickHandler({ event, item })}
            >
              {item?.childrenLists?.map(item =>
                <TreeItem
                  key={item.id}
                  icon={item?.icon}
                  nodeId={item.id}
                  label={t(MENU_TRANSLATION_PREFIX + item.translateName)}
                  onClick={(event) => clickHandler({ event, item })}
                />)}
            </TreeItem>
          }
          )}
        </TreeView>;

      }
      case 1: {
        return;
      }

      case 2: {
        return;
      }
    }
  }, [selectedTabNumber, expanded, menu])


  useEffect(() => {

  }, [])


  return (

    <Box className={classess.menuContent}>
      <Tabs
        className={classess.tabs}
        value={selectedTabNumber}
        onChange={handleChange}
        centered
      >
        <Tab label="Contents" />
        <Tab label="Index" />
        <Tab label="Bookmarks" />
      </Tabs>
      {showTabContent}
    </Box>
  )
}
