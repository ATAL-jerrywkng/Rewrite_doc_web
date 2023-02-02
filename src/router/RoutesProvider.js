import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AboutEcrs } from '../pages/AboutEcrs';
// Pages
import { Cover } from '../pages/Cover';
import { EcrsSystem } from '../pages/EcrsSystem';
import { Home } from '../pages/Home';
import { LoginSystem } from '../pages/LoginSystem';
import { TimesheetSystem } from '../pages/TimesheetSystem';



export const RoutesProvider = () => {

    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/cover" element={<Cover />} />
            <Route
                path="/loginSystem"
                element={<LoginSystem />}
            />
            <Route path="/timesheetSystem" element={<TimesheetSystem />} />
            <Route path="/ecrsSystem" element={<EcrsSystem />} />
            <Route path="/about_ecrs" element={<AboutEcrs />} />
        </Routes>
    )
}
