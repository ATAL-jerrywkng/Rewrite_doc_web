import React from "react";

import { ReduxProvider } from "./redux/ReduxProvider";
import { RoutesProvider } from "./router/RoutesProvider";

export const App = () => {
  return (
    <ReduxProvider>
      <RoutesProvider />
    </ReduxProvider>
  );
};
