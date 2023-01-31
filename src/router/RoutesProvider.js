import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import { Cover } from '../pages/Cover';
import { Home } from '../pages/Home';



export const RoutesProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cover" element={<Cover />} />
        </Routes>
    )
}
