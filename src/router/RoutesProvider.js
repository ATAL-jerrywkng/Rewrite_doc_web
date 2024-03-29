import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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
//import { Qs } from "../pages/Qs";
import { Installation } from "../pages/Installation";
//import { Attendance } from "../pages/Attendance";
import { HasAccount } from "../pages/HasAccount";
import { NotHasAccount } from "../pages/NotHasAccount";
import { CreateAccount } from "../pages/CreateAccount";
import { MySummary } from "../pages/MySummary";
import { MySummaryTimeSheet } from "../pages/MySummaryTimeSheet";
import { MySummaryEcrs } from "../pages/MySummaryEcrs";
import { MySummaryHotNews } from "../pages/MySummaryHotNews";
import { TimesheetSummary } from "../pages/TimesheetSummary";
import { NewTimesheetClockMode } from "../pages/NewTimesheetClockMode";
import { NewTimesheetPercentMode } from "../pages/NewTimesheetPercentMode";
import { AddDateToTimesheet } from "../pages/AddDateToTimesheet";
import { EcrsSystemSummary } from "../pages/EcrsSystemSummary";
import { EcrsSystemFilter } from "../pages/EcrsSystemFilter";
import { EcrsSystemFormCar } from "../pages/EcrsSystemFormCar";
import { EcrsSystemFormCarBM } from "../pages/EcrsSystemFormCarBM";
import { EcrsSystemFormMyself } from "../pages/EcrsSystemFormMyself";
import { EcrsSystemBatchSubmit } from "../pages/EcrsSystemBatchSubmit";
import { EcrsSystemPerformApproval } from "../pages/EcrsSystemPerformApproval";
import { EcrsSystemTimeSheetPerformApproval } from "../pages/EcrsSystemTimeSheetPerformApproval";
import { EcrsSystemViewApproval } from "../pages/EcrsSystemViewApproval";
import { EcrsSystemRejects } from "../pages/EcrsSystemRejects";
import { EcrsSystemFinishRecord } from "../pages/EcrsSystemFinishRecord";
import { NotFind } from "../pages/NotFind";
import { PersonalInfo } from "../pages/PersonalInfo";
import { EcrstimesheetApproval } from "../pages/EcrstimesheetApproval";
import { EcrsSystemStandbyAllowancePerformApproval } from "../pages/EcrsSystemStandbyAllowancePerformApproval";




export const RoutesProvider = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LayoutProvider />}>
        <Route index path="/" element={<Home />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/aboutEcrs" element={<AboutEcrs />} />

        <Route path="/installation" element={<Installation />} />

        <Route path="/loginSystem" element={<LoginSystem />} />
        <Route path="/hasAccount" element={<HasAccount />} />
        <Route path="/notHasAccount" element={<NotHasAccount />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/mySummary" element={<MySummary />} />
        <Route path="/mySummaryTimeSheet" element={<MySummaryTimeSheet />} />
        <Route path="/mySummaryEcrs" element={<MySummaryEcrs />} />
        <Route path="/mySummaryHotNews" element={<MySummaryHotNews />} />
        <Route path="/timesheetSystem" element={<TimesheetSystem />} />
        <Route path="/timesheetSummary" element={<TimesheetSummary />} />
        <Route path="/newTimesheetClockMode" element={<NewTimesheetClockMode />} />
        <Route path="/newTimesheetPercentMode" element={<NewTimesheetPercentMode />} />
        <Route path="/addDateToTimesheet" element={<AddDateToTimesheet />} />
        <Route path="/ecrsSystem" element={<EcrsSystem />} />
        <Route path="/ecrsSystemSummary" element={<EcrsSystemSummary />} />
        <Route path="/ecrsSystemFilter" element={<EcrsSystemFilter />} />
        <Route path="/ecrsSystemFormCar" element={<EcrsSystemFormCar />} />
        <Route path="/ecrsSystemFormCarBM" element={<EcrsSystemFormCarBM />} />
        <Route path="/ecrsSystemFormMyself" element={<EcrsSystemFormMyself />} />
        <Route path="/ecrsSystemBatchSubmit" element={<EcrsSystemBatchSubmit />} />
        <Route path="/ecrsSystemViewApproval" element={<EcrsSystemViewApproval />} />
        <Route path="/ecrstimesheetApproval" element={<EcrstimesheetApproval />} />
        <Route path="/ecrsSystemPerformApproval" element={<EcrsSystemPerformApproval />} />
        <Route path="/ecrsSystemTimeSheetPerformApproval" element={<EcrsSystemTimeSheetPerformApproval />} />
        <Route path="/ecrsSystemStandbyAllowancePerformApproval" element={<EcrsSystemStandbyAllowancePerformApproval />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="*" element={<NotFind />} />
      </Route>
    ),
    { basename: "/help2" }
  );
  return <RouterProvider router={router} />;
};
