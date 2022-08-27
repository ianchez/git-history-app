import React from "react";
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import { GitHistoryPage } from "../pages/gitHistory.page";

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route path="git-history" element={<GitHistoryPage />} />
    </ReactRouterRoutes>
  );
}

export { Routes };