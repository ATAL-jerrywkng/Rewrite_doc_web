import React, { useCallback, useEffect, useMemo } from 'react'
import StarIcon from '@mui/icons-material/Star';
import PrintIcon from '@mui/icons-material/Print';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ContentTopBarButton } from './ContentTopBarButton';
import { addBookmark, removeBookmark, saveBookmarksToLocalStorage } from '../redux/reducers/bookmarkSlice';

export const ContentButtonBar = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.menuLists);
    const bookmark = useSelector(state => state.bookmark.bookmarks);



    const bookmarkHandler = useCallback((location, bookmark) => {
        // console.log("file: ContentButtonBar.js:20 -> bookmarkHandler -> location, bookmark", location, bookmark);

        // find pathname from bookmark
        let pathname = location?.pathname;
        if (pathname) {
            let findOne = bookmark.find(find => find === pathname);
            if (findOne) {
                // console.log("file: ContentButtonBar.js:25 -> bookmarkHandler -> findOne", true);
                dispatch(removeBookmark(pathname));

            } else {
                // console.log("file: ContentButtonBar.js:25 -> bookmarkHandler -> findOne", false);
                dispatch(addBookmark(pathname));

                // dispatch(saveBookmarksToLocalStorage(bookmark)); 
            }
        }

    }, [location, bookmark])

    useEffect(() => {
        localStorage.setItem("bookmarks", bookmark);
    }, [bookmark])


    const clickHandler = ({ event, item }) => {
        // console.log("file: SummaryPageBase.js:20 -> clickHandler -> event", event.target);
        // console.log("file: SummaryPageBase.js:20 -> clickHandler -> item", item);
        switch (item?.name) {
            case 'bookmark': {
                bookmarkHandler(location, bookmark);
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


    // Check the page in bookmarks List
    const checkBookmarks = useMemo(() => {
        let pathname = location?.pathname;
        let findPage = bookmark?.find(find => find === pathname);
        if (findPage) {
            return true;
        }
        return false;
    }, [location, bookmark])


    const buttonList = [
        { id: 'btn01', name: 'bookmark', buttonElement: <StarIcon fontSize="small" sx={{ color: checkBookmarks ? '#248ef4' : 'orange' }} />, disabledControl: null },
        // { id: 'btn02', name: 'print', buttonElement: <PrintIcon fontSize="small" />, disabledControl: null },
        // { id: 'btn03', name: 'prevPage', buttonElement: <FirstPageIcon fontSize="small" />, disabledControl: null },
        // { id: 'btn04', name: 'parentPage', buttonElement: <VerticalAlignTopIcon fontSize="small" />, disabledControl: checkPageHaveParent() },
        // { id: 'btn05', name: 'nextPage', buttonElement: <LastPageIcon fontSize="small" />, disabledControl: null },
    ]


    const showBtns = useMemo(() => buttonList?.map(item => <ContentTopBarButton disabled={item?.disabledControl} key={item.id} onClick={(event) => clickHandler({ event, item })}>{item.buttonElement}</ContentTopBarButton>), [buttonList])

    return showBtns;
}
