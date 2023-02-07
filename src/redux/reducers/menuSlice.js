import { createSlice } from "@reduxjs/toolkit"
import treeQs from '../../asserts/mo-tree-t.gif';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuLists: [
            { id: 'menu01', name: 'Cover', translateName: 'cover', url: '/cover', icon: <img src={treeQs} />, childrenLists: null },
            { id: 'menu02', name: 'AboutECRS', translateName: 'aboutECRS', url: '/aboutEcrs', icon: <img src={treeQs} />, childrenLists: null },
            { id: 'menu03', name: 'Qs', translateName: 'qs', url: '/qs', icon: <img src={treeQs} />, childrenLists: null },
            { id: 'menu04', name: 'Installation', translateName: 'installation', url: '/installation', icon: <img src={treeQs} />, childrenLists: null },
            { id: 'menu05', name: 'Attendance', translateName: 'attendance', url: '/attendance', icon: <img src={treeQs} />, childrenLists: null },
            {
                id: 'menu06', name: 'LoginSystem', translateName: 'loginSystem', url: '/loginSystem', icon: null, childrenLists: [
                    { id: 'menu07', name: 'HasAccount', translateName: 'hasAccount', url: '/hasAccount', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu08', name: 'NotHasAccount', translateName: 'notHasAccount', url: '/notHasAccount', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu09', name: 'CreateAccount', translateName: 'createAccount', url: '/createAccount', icon: <img src={treeQs} />, childrenLists: null }
                ]
            },
            { id: 'menu10', name: 'MySummary', translateName: 'mySummary', url: '/mySummary', icon: <img src={treeQs} />, childrenLists: null },
            {
                id: 'menu11', name: 'TimesheetSystem', translateName: 'timesheetSystem', url: '/timesheetSystem', icon: null, childrenLists: [
                    { id: 'menu12', name: 'TimesheetSummary', translateName: 'timesheetSummary', url: '/timesheetSummary', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu13', name: 'NewTimesheetClockMode', translateName: 'newTimesheetClockMode', url: '/newTimesheetClockMode', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu14', name: 'NewTimesheetPercentMode', translateName: 'newTimesheetPercentMode', url: '/newTimesheetPercentMode', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu15', name: 'AddDateToTimesheet', translateName: 'addDateToTimesheet', url: '/addDateToTimesheet', icon: <img src={treeQs} />, childrenLists: null },
                ]
            },
            {
                id: 'menu16', name: 'EcrsSystem', translateName: 'ecrsSystem', url: '/ecrsSystem', icon: null, childrenLists: [
                    { id: 'menu17', name: 'EcrsSystemSummary', translateName: 'ecrsSystemSummary', url: '/ecrsSystemSummary', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu18', name: 'EcrsSystemFilter', translateName: 'ecrsSystemFilter', url: '/ecrsSystemFilter', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu19', name: 'EcrsSystemFormCar', translateName: 'ecrsSystemFormCar', url: '/ecrsSystemFormCar', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu20', name: 'EcrsSystemFormMyself', translateName: 'ecrsSystemFormMyself', url: '/ecrsSystemFormMyself', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu21', name: 'EcrsSystemViewApproval', translateName: 'ecrsSystemViewApproval', url: '/ecrsSystemViewApproval', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu22', name: 'EcrsSystemRejects', translateName: 'ecrsSystemRejects', url: '/ecrsSystemRejects', icon: <img src={treeQs} />, childrenLists: null },
                    { id: 'menu23', name: 'EcrsSystemFinishRecord', translateName: 'ecrsSystemFinishRecord', url: '/ecrsSystemFinishRecord', icon: <img src={treeQs} />, childrenLists: null },
                ]
            },
            { id: 'menu24', name: 'Permission', translateName: 'permission', url: '/permission', icon: <img src={treeQs} />, childrenLists: null },

        ]
    },
    reducers: {

    }
});

export const { } = menuSlice.actions;
export default menuSlice.reducer;
