import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// Slices (Reducers)
import menuSlice from './reducers/menuSlice';
import bookmarkSlice from './reducers/bookmarkSlice';


export const ReduxProvider = (props) => {

    // Create Store
    const store = configureStore({
        // Add Slices (Reducers)
        reducer: {
            menu: menuSlice,
            bookmark:bookmarkSlice
        }
    })

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}
