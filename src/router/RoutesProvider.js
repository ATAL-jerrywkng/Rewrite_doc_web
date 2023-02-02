import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { LayoutProvider } from "../layout/LayoutProvider";
import { AboutEcrs } from "../pages/AboutEcrs";
// Pages
import { Cover } from "../pages/Cover";
import { EcrsSystem } from "../pages/EcrsSystem";
import { Home } from "../pages/Home";
import { LoginSystem } from "../pages/LoginSystem";
import { TimesheetSystem } from "../pages/TimesheetSystem";

export const RoutesProvider = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LayoutProvider />}>
        <Route index path="/" element={<Home />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/loginSystem" element={<LoginSystem />} />
        <Route path="/timesheetSystem" element={<TimesheetSystem />} />
        <Route path="/ecrsSystem" element={<EcrsSystem />} />
        <Route path="/about_ecrs" element={<AboutEcrs />} />
      </Route>
    ),
    { basename: "/help2" }
  );
  return <RouterProvider router={router} />;
};
