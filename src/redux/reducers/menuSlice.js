import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuLists: [
            { id: 'menu01', name: 'Cover', translateName: 'cover', url: '/cover', icon: null, childrenLists: null },
            { id: 'menu02', name: 'AboutECRS', translateName: 'aboutECRS', url: '/about_ecrs', icon: null, childrenLists: null },
            { id: 'menu03', name: 'Qs', translateName: 'qs', url: '/qs', icon: null, childrenLists: null },
            { id: 'menu04', name: 'Installation', translateName: 'installation', url: '/installation', icon: null, childrenLists: null },
            { id: 'menu05', name: 'Attendance', translateName: 'attendance', url: '/attendance', icon: null, childrenLists: null },
            {
                id: 'menu06', name: 'LoginSystem', translateName: 'loginSystem', url: '/loginSystem', icon: null, childrenLists: [
                    { id: 'menu07', name: 'HasAccount', translateName: 'hasAccount', url: '/hasAccount', icon: null, childrenLists: null },
                    { id: 'menu08', name: 'NotHasAccount', translateName: 'notHasAccount', url: '/notHasAccount', icon: null, childrenLists: null }
                ]
            },
            { id: 'menu09', name: 'MySummary', translateName: 'mySummary', url: '/mySummary', icon: null, childrenLists: null },
            {
                id: 'menu10', name: 'TimesheetSystem', translateName: 'timesheetSystem', url: '/timesheetSystem', icon: null, childrenLists: [
                    { id: 'menu11', name: 'TimesheetSummary', translateName: 'timesheetSummary', url: '/timesheetSummary', icon: null, childrenLists: null },
                    { id: 'menu12', name: 'NewTimesheetClockMode', translateName: 'newTimesheetClockMode', url: '/newTimesheetClockMode', icon: null, childrenLists: null },
                    { id: 'menu13', name: 'NewTimesheetPercentMode', translateName: 'newTimesheetPercentMode', url: '/newTimesheetPercentMode', icon: null, childrenLists: null },
                    { id: 'menu14', name: 'AddDateToTimesheet', translateName: 'addDateToTimesheet', url: '/addDateToTimesheet', icon: null, childrenLists: null },
                ]
            },
            {
                id: 'menu15', name: 'EcrsSystem', translateName: 'ecrsSystem', url: '/ecrsSystem', icon: null, childrenLists: [
                    { id: 'menu16', name: 'EcrsSystemSummary', translateName: 'ecrsSystemSummary', url: '/ecrsSystemSummary', icon: null, childrenLists: null },
                    { id: 'menu17', name: 'EcrsSystemFilter', translateName: 'ecrsSystemFilter', url: '/ecrsSystemFilter', icon: null, childrenLists: null },
                    { id: 'menu18', name: 'EcrsSystemFormCar', translateName: 'ecrsSystemFormCar', url: '/ecrsSystemFormCar', icon: null, childrenLists: null },
                    { id: 'menu19', name: 'EcrsSystemFormMyself', translateName: 'ecrsSystemFormMyself', url: '/ecrsSystemFormMyself', icon: null, childrenLists: null },
                    { id: 'menu20', name: 'EcrsSystemRejects', translateName: 'ecrsSystemRejects', url: '/ecrsSystemRejects', icon: null, childrenLists: null },
                    { id: 'menu21', name: 'EcrsSystemFinishRecord', translateName: 'ecrsSystemFinishRecord', url: '/ecrsSystemFinishRecord', icon: null, childrenLists: null },
                ]
            },
            { id: 'menu22', name: 'Permission', translateName: 'permission', url: '/permission', icon: null, childrenLists: null },

        ]
    },
    reducers: {

    }
});

export const { } = menuSlice.actions;
export default menuSlice.reducer;
