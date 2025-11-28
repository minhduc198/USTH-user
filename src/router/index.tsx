import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Parking from "../components/Parking";
import { Component, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate, Outlet } from "react-router";
import { pathConfig } from "./path";
import Login from "../login";
import Register from "../register";
import ResetPassword from "../resetPassword";
import App from "../App";

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext);

  if (isAuthenticated) return <Outlet />;

  return <Navigate to={pathConfig.login} />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext);

  if (isAuthenticated) {
    return <Navigate to={pathConfig.parking} />;
  }

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: ProtectedRoute,
        children: [
          {
            path: "/",
            Component: Layout,
            children: [{ path: pathConfig.parking, Component: Parking }],
          },
        ],
      },

      {
        path: "/",
        Component: RejectedRoute,
        children: [
          {
            path: pathConfig.login,
            Component: Login,
          },
          {
            path: pathConfig.register,
            Component: Register,
          },
        ],
      },

      {
        path: pathConfig.resetPassword,
        Component: ResetPassword,
      },
    ],
  },
]);
