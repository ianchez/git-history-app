import React from "react";
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { GitHistoryPage } from "../pages/GitHistory.page";

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<GitHistoryPage />} />
    </ReactRouterRoutes>
  );
}

export { Routes };