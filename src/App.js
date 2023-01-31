import React from 'react'
import {
    BrowserRouter
} from 'react-router-dom'
import { ReduxProvider } from './redux/ReduxProvider';

// Layout
import { LayoutProvider } from './layout/LayoutProvider';

// Routes
import { RoutesProvider } from './router/RoutesProvider';

export const App = () => {

    return (
        <ReduxProvider>
            <BrowserRouter>
                <LayoutProvider>
                    <RoutesProvider />
                </LayoutProvider>
            </BrowserRouter>
        </ReduxProvider>
    )
}
