import { createSlice } from '@reduxjs/toolkit';

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmarks: localStorage.getItem('bookmarks')?.split(",")?.filter(filter => filter !== '') || []
    },
    reducers: {

        addBookmark: (state, action) => {
            let temp = [...state.bookmarks];
            temp.push(action.payload);
            state.bookmarks = temp;
        },
        removeBookmark: (state, action) => {
            state.bookmarks = state.bookmarks.filter(item => item !== action.payload);

        }
    }
})

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
