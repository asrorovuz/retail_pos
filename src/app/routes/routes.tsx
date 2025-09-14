import { createBrowserRouter, Navigate } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"
import { AppLayout } from "../layout/MainLayout"
import RegisterPage from "../../features/auth/ui/RegisterPage"
import SalesPage from "../../pages/sales/SalesPage"
import LoginPage from "../../pages/auth/LoginPage"
import { PrivateRoute, PublicRoute } from "./ProtectedRoute"
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
        element: <AppLayout />,
        children: [{ path: "/sales", element: <SalesPage /> }],
      },
    ],
  },
])
