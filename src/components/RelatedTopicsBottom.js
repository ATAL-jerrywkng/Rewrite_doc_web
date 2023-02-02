import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MENU_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';
import classess from './styles/RelatedTopicsBottom.module.scss';
export const RelatedTopicsBottom = () => {
    const menu = useSelector(state => state.menu.menuLists);
    const location = useLocation();
    const { t } = useTranslation('menu');

    // Find Parent List
    const findParentList = (menus) => {
        if (menus) {
            return menus.filter(item => item?.childrenLists !== null);
        }
    }
    // Show Related Topics
    const showRelatedTopics = useMemo(() => {
        if (menu && location) {
            let findParent = findParentList(menu);
            if (findParent?.length >= 1) {
                let findParentByPathname = findParent.find(find => find?.url === location?.pathname);
                if (findParentByPathname) {
                    // console.log("file: SummaryPageBase.js:77 -> showRelatedTopics -> findParentByPathname.childrenLists", findParentByPathname.childrenLists)
                    return findParentByPathname.childrenLists;
                }
            }
        }
    }, [location, menu])

    const showRelateTopicsList = useMemo(() => showRelatedTopics?.map(item => <Box key={item.id} className={classess.topicBox}>
        <Link to={item.url}>{t(MENU_TRANSLATION_PREFIX + item.translateName)}</Link>
    </Box>), [showRelatedTopics])

    return (
        <Box className={classess.relatedTopics}>
            <Typography variant='h6' >Related Topics</Typography>
            {showRelateTopicsList}
        </Box>

    )
}
