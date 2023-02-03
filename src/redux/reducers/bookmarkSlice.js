import { createSlice } from '@reduxjs/toolkit';

export const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        bookmarks: JSON.stringify(localStorage.getItem('bookmarks')) || []
    },
    reducers: {
        saveBookmarksToLocalStorage: (state, action) => {

        },
        addBookmark: (state, action) => {
            state.bookmarks.push(action.payload);

        },
        removeBookmark: (state, action) => {
            state.bookmarks = state.bookmarks.filter(item => item !== action.payload);

        }
    }
})

export const { saveBookmarksToLocalStorage, addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
