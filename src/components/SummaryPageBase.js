import React, { useCallback, useMemo } from 'react';
import classess from './styles/SummaryPageBase.module.scss';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {
  Box, Typography,
} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import PrintIcon from '@mui/icons-material/Print';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

import { ContentTopBarButton } from './ContentTopBarButton';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MENU_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';


export const SummaryPageBase = (props) => {

  const location = useLocation();
  const { t } = useTranslation('menu');
  const menu = useSelector(state => state.menu.menuLists);


  const clickHandler = ({ event, item }) => {
    // console.log("file: SummaryPageBase.js:20 -> clickHandler -> event", event.target);
    console.log("file: SummaryPageBase.js:20 -> clickHandler -> item", item);
    switch (item?.name) {
      case 'bookmark': {

      }
      case 'print': {

      }
      case 'prevPage': {

      }
      case 'parentPage': {

      }
      case 'nextPage': {

      }
      default: {
        console.log('Not find the name of item');
        return;
      }
    }
  }


  // Find Parent List
  const findParentList = (menus) => {
    if (menus) {
      return menus.filter(item => item?.childrenLists !== null);
    }
  }

  // Find Children List
  const findChildrenList = (parents) => {
    let allChildrenLists = [];
    parents.forEach(element => {
      allChildrenLists = [...allChildrenLists, ...element.childrenLists]
    });
    return allChildrenLists;
  }

  // Show Related Topics
  const showRelatedTopics = useMemo(() => {
    if (menu && location) {
      let findParent = findParentList(menu);
      if (findParent?.length >= 1) {
        let findParentByPathname = findParent.find(find => find?.url === location?.pathname);
        if (findParentByPathname) {
          console.log("file: SummaryPageBase.js:77 -> showRelatedTopics -> findParentByPathname.childrenLists", findParentByPathname.childrenLists)
          return findParentByPathname.childrenLists;
        }
      }
    }
  }, [location, menu])



  // Find Parent By Location pathname
  const checkPageHaveParent = useCallback(() => {
    if (menu && location) {
      let findParentMenus = findParentList(menu);
      let allChildrenLists = findChildrenList(findParentMenus);
      // console.log("file: SummaryPageBase.js:55 -> checkPageHaveParent -> findParentMenus", findParentMenus);
      // console.log("file: SummaryPageBase.js:56 -> checkPageHaveParent -> allChildrenLists", allChildrenLists);

      let pathname = location?.pathname;
      if (pathname) {
        let findChildrenByPathname = allChildrenLists.find(find => find?.url === pathname);
        if (findChildrenByPathname) {
          return false;
        } else {
          return true;
        }
      }
    }
  }, [menu, location])


  const buttonList = [
    { id: 'btn01', name: 'bookmark', buttonElement: <StarIcon fontSize="small" />, disabledControl: null },
    { id: 'btn02', name: 'print', buttonElement: <PrintIcon fontSize="small" />, disabledControl: null },
    { id: 'btn03', name: 'prevPage', buttonElement: <FirstPageIcon fontSize="small" />, disabledControl: null },
    { id: 'btn04', name: 'parentPage', buttonElement: <VerticalAlignTopIcon fontSize="small" />, disabledControl: checkPageHaveParent() },
    { id: 'btn05', name: 'nextPage', buttonElement: <LastPageIcon fontSize="small" />, disabledControl: null },
  ]

  const showBtns = useMemo(() => buttonList?.map(item => <ContentTopBarButton disabled={item?.disabledControl} key={item.id} onClick={(event) => clickHandler({ event, item })}>{item.buttonElement}</ContentTopBarButton>), [buttonList])


  return (
    <Box className={classess.pageBox}>
      <Box className={classess.content}>
        <Grid2 container className={classess.contentGrid}>
          <Grid2 item sx={{ flex: 'auto' }}>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              {props?.title}
            </Typography>
          </Grid2>
          <Grid2 item >
            {showBtns}
          </Grid2>
        </Grid2>
        <Box className={classess.contentBox}>
          {props.children}
          <Box className={classess.relatedTopics}>
            <Typography variant='h6' >Related Topics</Typography>
            {showRelatedTopics?.map(item => <Box key={item.id} className={classess.topicBox}>
              <Link to={item.url}>{t(MENU_TRANSLATION_PREFIX + item.translateName)}</Link>
            </Box>)}
          </Box>
        </Box>
      </Box>
    </Box>

  )
}
