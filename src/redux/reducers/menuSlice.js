import { createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuLists: []
    },
    reducers: {
        addMenuItem: (state, action) => {
            state.menuLists.push(action.payload);
        }
    }
});

export const { addMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
