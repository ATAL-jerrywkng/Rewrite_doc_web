import React, { useCallback, useEffect, useMemo, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import PrintIcon from '@mui/icons-material/Print';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ContentTopBarButton } from './ContentTopBarButton';
import { addBookmark, removeBookmark, saveBookmarksToLocalStorage } from '../redux/reducers/bookmarkSlice';
import { setFirstSearch } from '../redux/reducers/menuSlice';

export const ContentButtonBar = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menu = useSelector(state => state.menu.menuLists);
    const bookmark = useSelector(state => state.bookmark.bookmarks);
    const firstSearch = useSelector(state => state.menu.firstSearch);



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

    // Get All Menu List 
    const allMenuList = useMemo(() => {
        if (menu && location) {
            // console.log("file: ContentButtonBar.js:50 -> allMenuList -> menu", menu)
            let temp = [];
            menu.forEach(each => {
                temp.push(each);
                if (each?.childrenLists) {
                    each.childrenLists?.forEach(child => temp.push(child))
                }
            })
            // console.log("file: ContentButtonBar.js:59 -> allMenuList -> temp", temp)
            return temp;
        }
    }, [menu, location])

    const handlePageButtonClick = useCallback(({ action }) => {
        // console.log("file: ContentButtonBar.js:63 -> handlePageButtonClick -> action", action);
        if (allMenuList) {
            // console.log("file: ContentButtonBar.js:65 -> handlePageButtonClick -> allMenuList", allMenuList);
            let pathname = location?.pathname;
            let finalPathname = null;
            let currentPositionByLocation = allMenuList?.findIndex(menu => menu?.url === pathname);
            //console.log("file: ContentButtonBar.js:69 -> handlePageButtonClick -> currentPositionByLocation", currentPositionByLocation)
            if (currentPositionByLocation >= 0) {
                switch (action) {
                    case "prevPage": {
                        finalPathname = allMenuList[currentPositionByLocation - 1]?.url
                        break;
                    }
                    case "nextPage": {
                        finalPathname = allMenuList[currentPositionByLocation + 1]?.url
                        break;
                    }
                }
                // console.log("file: ContentButtonBar.js:85 -> handlePageButtonClick -> finalPathname", finalPathname)
                navigate(finalPathname);
            } else {
                console.log('Current pathname in menu is not find!');
            }

        }

    }, [allMenuList])

    const checkCanClickPrevBtn = useCallback(() => {
        if (allMenuList && location) {
            let findPosition = allMenuList?.findIndex(find => find?.url === location?.pathname);
            if (findPosition === 0) {
                return true;
            }
            return false;
        }
    }, [allMenuList, location])

    const checkCanClickNextBtn = useCallback(() => {
        if (allMenuList && location) {
            let findPosition = allMenuList?.findIndex(find => find?.url === location?.pathname);
            if (findPosition === (allMenuList?.length - 1)) {
                return true;
            }
            return false;
        }
    }, [allMenuList, location])




    const clickHandler = ({ event, item }) => {
        // console.log("file: SummaryPageBase.js:20 -> clickHandler -> event", event.target);
        // console.log("file: SummaryPageBase.js:20 -> clickHandler -> item", item);
        switch (item?.name) {
            case 'bookmark': {
                bookmarkHandler(location, bookmark);
                break;
            }
            case 'print': {
                // window.print()
                break;
            }
            case 'prevPage': {
                dispatch(setFirstSearch(true));
                handlePageButtonClick({ action: item?.name });
                break;
            }
            case 'parentPage': {
                if (getParentByChildrenMenu?.url) {
                    // console.log("file: ContentButtonBar.js:63 -> clickHandler -> getParentByChildrenMenu", getParentByChildrenMenu)

                    navigate(getParentByChildrenMenu?.url);
                }
                break;
            }
            case 'nextPage': {
                dispatch(setFirstSearch(true));
                handlePageButtonClick({ action: item?.name });
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
    // Set Parent Pathname
    const [parent, setParent] = useState(null);
    // // Find Parent By Children Location pathname
    const getParentByChildrenMenu = useMemo(() => {
        return parent;
    }, [parent])

    // Find Parent By Location pathname
    const checkPageHaveParent = useCallback(() => {
        if (menu && location) {
            let findParentMenus = findParentList(menu);
            let allChildrenLists = findChildrenList(findParentMenus);
            // console.log("file: SummaryPageBase.js:55 -> checkPageHaveParent -> findParentMenus", findParentMenus);
            // console.log("file: SummaryPageBase.js:56 -> checkPageHaveParent -> allChildrenLists", allChildrenLists);

            let pathname = location?.pathname;
            if (pathname) {
                let findChildrenByPathname = allChildrenLists.find(find => {
                    if (find?.url === pathname) {
                        findParentMenus?.forEach(each => {
                            if (each?.childrenLists?.find(find => find?.url === pathname)) {
                                // console.log("file: ContentButtonBar.js:118 -> findChildrenByPathname -> each", each)
                                setParent(each);
                            }
                        })
                        return find
                    }
                });
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


    const buttonList = useMemo(() => [
        { id: 'btn01', name: 'bookmark', buttonElement: <StarIcon fontSize="small" sx={{ color: checkBookmarks ? '#248ef4' : 'orange', '&:hover': { color: checkBookmarks ? '#248ef4' : 'white' } }} />, disabledControl: null },
        // { id: 'btn02', name: 'print', buttonElement: <PrintIcon fontSize="small" />, disabledControl: null },
        { id: 'btn03', name: 'prevPage', buttonElement: <FirstPageIcon fontSize="small" />, disabledControl: checkCanClickPrevBtn() },
        { id: 'btn04', name: 'parentPage', buttonElement: <VerticalAlignTopIcon fontSize="small" />, disabledControl: checkPageHaveParent() },
        { id: 'btn05', name: 'nextPage', buttonElement: <LastPageIcon fontSize="small" />, disabledControl: checkCanClickNextBtn() },
    ], [checkBookmarks, location, getParentByChildrenMenu])


    const showBtns = useMemo(() => buttonList?.map(item => <ContentTopBarButton style={item?.style} disabled={item?.disabledControl} key={item.id} onClick={(event) => clickHandler({ event, item })}>{item.buttonElement}</ContentTopBarButton>), [buttonList])

    return showBtns;
}
