import React from "react";
import { Routes, Route } from "react-router-dom";
import routeConfig from "./routeConfig";

/**
 * AppRoutes renders the set of routes for the application.
 * It maps over the routeConfig array to dynamically create Route components.
 */
const AppRoutes = () => {
  return (
    <>
      <Routes>
        {routeConfig.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutes;
