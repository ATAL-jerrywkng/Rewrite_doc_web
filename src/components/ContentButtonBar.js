import React, { useCallback, useMemo } from 'react'
import StarIcon from '@mui/icons-material/Star';
import PrintIcon from '@mui/icons-material/Print';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ContentTopBarButton } from './ContentTopBarButton';

export const ContentButtonBar = (props) => {
    const location = useLocation();
    const menu = useSelector(state => state.menu.menuLists);


    const clickHandler = ({ event, item }) => {
        // console.log("file: SummaryPageBase.js:20 -> clickHandler -> event", event.target);
        console.log("file: SummaryPageBase.js:20 -> clickHandler -> item", item);
        switch (item?.name) {
            case 'bookmark': {
                break;
            }
            case 'print': {
                break;
            }
            case 'prevPage': {
                break;
            }
            case 'parentPage': {
                break;
            }
            case 'nextPage': {
                break;
            }
            default: {
                console.log('Not find the name of item');
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
        showBtns
    )
}
