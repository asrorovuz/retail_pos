import { createBrowserRouter, Navigate } from "react-router";
import { PrivateRoute, PublicRoute } from "./ProtectedRoute";
import {
  AppLayout,
  AuthLayout,
  LoginPage,
  RegisterPage,
  SalesPage,
  SettingsPage,
} from "./importFile";
import { InitProvider } from "../providers";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/sales" replace />,
  },
  {
    element: <PublicRoute />, // login/register
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/register", element: <RegisterPage /> },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />, // faqat login bo‘lganda
    children: [
      {
        element: (
          <InitProvider>
            <AppLayout />
          </InitProvider>
        ),
        children: [
          { path: "/sales", element: <SalesPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);
