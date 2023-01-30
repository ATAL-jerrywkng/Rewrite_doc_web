import React from 'react'
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'
import { ReduxProvider } from './redux/ReduxProvider';


// Layout
import { LayoutProvider } from './layout/LayoutProvider';

// Pages
import { Cover } from './pages/Cover';
import { Home } from './pages/Home';

export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/cover',
            element: <Cover />

        }
    ]);


    return (
        <ReduxProvider>
            <LayoutProvider>
                <RouterProvider router={router} />
            </LayoutProvider>
        </ReduxProvider>
    )
}
