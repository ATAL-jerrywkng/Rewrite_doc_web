import { createSlice } from "@reduxjs/toolkit"
import treeQs from '../../asserts/mo-tree-t.gif';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuLists: [

            { id: 'menu01', name: 'Cover', translateName: 'cover', url: '/cover', icon: 'treeQs', childrenLists: null },
            { id: 'menu02', name: 'AboutECRS', translateName: 'aboutECRS', url: '/aboutEcrs', icon: 'treeQs', childrenLists: null },
            //{ id: 'menu03', name: 'Qs', translateName: 'qs', url: '/qs', icon: 'treeQs', childrenLists: null },
            { id: 'menu03', name: 'Installation', translateName: 'installation', url: '/installation', icon: 'treeQs', childrenLists: null },
            //{ id: 'menu05', name: 'Attendance', translateName: 'attendance', url: '/attendance', icon: 'treeQs', childrenLists: null },
            {
                id: 'menu04', name: 'LoginSystem', translateName: 'loginSystem', url: '/loginSystem', icon: null, childrenLists: [
                    { id: 'menu05', name: 'HasAccount', translateName: 'hasAccount', url: '/hasAccount', icon: 'treeQs', childrenLists: null },
                    { id: 'menu06', name: 'NotHasAccount', translateName: 'notHasAccount', url: '/notHasAccount', icon: 'treeQs', childrenLists: null },
                    { id: 'menu07', name: 'CreateAccount', translateName: 'createAccount', url: '/createAccount', icon: 'treeQs', childrenLists: null }
                ]
            },
            {
                id: 'menu08', name: 'MySummary', translateName: 'mySummary', url: '/mySummary', icon: null, childrenLists: [
                    { id: 'menu09', name: 'MySummaryTimeSheet', translateName: 'mySummaryTimeSheet', url: '/mySummaryTimeSheet', icon: 'treeQs', childrenLists: null },
                    { id: 'menu10', name: 'MySummaryEcrs', translateName: 'mySummaryEcrs', url: '/mySummaryEcrs', icon: 'treeQs', childrenLists: null },
                    { id: 'menu11', name: 'MySummaryHotNews', translateName: 'mySummaryHotNew', url: '/mySummaryHotNews', icon: 'treeQs', childrenLists: null },

                ]
            },
            {
                id: 'menu12', name: 'TimesheetSystem', translateName: 'timesheetSystem', url: '/timesheetSystem', icon: null, childrenLists: [
                    { id: 'menu13', name: 'TimesheetSummary', translateName: 'timesheetSummary', url: '/timesheetSummary', icon: 'treeQs', childrenLists: null },
                    { id: 'menu14', name: 'NewTimesheetClockMode', translateName: 'newTimesheetClockMode', url: '/newTimesheetClockMode', icon: 'treeQs', childrenLists: null },
                    { id: 'menu15', name: 'NewTimesheetPercentMode', translateName: 'newTimesheetPercentMode', url: '/newTimesheetPercentMode', icon: 'treeQs', childrenLists: null },
                    { id: 'menu16', name: 'AddDateToTimesheet', translateName: 'addDateToTimesheet', url: '/addDateToTimesheet', icon: 'treeQs', childrenLists: null },
                ]
            },
            {
                id: 'menu17', name: 'EcrsSystem', translateName: 'ecrsSystem', url: '/ecrsSystem', icon: null, childrenLists: [
                    { id: 'menu18', name: 'EcrsSystemSummary', translateName: 'ecrsSystemSummary', url: '/ecrsSystemSummary', icon: 'treeQs', childrenLists: null },
                    { id: 'menu19', name: 'EcrsSystemFilter', translateName: 'ecrsSystemFilter', url: '/ecrsSystemFilter', icon: 'treeQs', childrenLists: null },
                    { id: 'menu20', name: 'EcrsSystemFormCar', translateName: 'ecrsSystemFormCar', url: '/ecrsSystemFormCar', icon: 'treeQs', childrenLists: null },
                    { id: 'menu21', name: 'EcrsSystemFormMyself', translateName: 'ecrsSystemFormMyself', url: '/ecrsSystemFormMyself', icon: 'treeQs', childrenLists: null },
                    { id: 'menu22', name: 'EcrsSystemViewApproval', translateName: 'ecrsSystemViewApproval', url: '/ecrsSystemViewApproval', icon: 'treeQs', childrenLists: null },
                    { id: 'menu23', name: 'EcrsSystemRejects', translateName: 'ecrsSystemRejects', url: '/ecrsSystemRejects', icon: 'treeQs', childrenLists: null },
                    { id: 'menu24', name: 'EcrsSystemFinishRecord', translateName: 'ecrsSystemFinishRecord', url: '/ecrsSystemFinishRecord', icon: 'treeQs', childrenLists: null },
                ]
            },
            // { id: 'menu25', name: 'Permission', translateName: 'permission', url: '/permission', icon: 'treeQs', childrenLists: null },


        ]
    },
    reducers: {

    }
});

export const { } = menuSlice.actions;
export default menuSlice.reducer;
