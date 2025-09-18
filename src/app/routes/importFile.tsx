import { lazy } from "react";

// Layoutlar (ularni ko‘pincha eager import qilsa ham bo‘ladi)
import { AuthLayout } from "../../widgets/layout/AuthLayout"
import { AppLayout } from "../../widgets/layout/MainLayout"

// Lazy sahifalar
const RegisterPage = lazy(() => import("../../features/auth/ui/RegisterPage"))
const SalesPage = lazy(() => import("../../pages/sales/SalesPage"))
const LoginPage = lazy(() => import("../../pages/auth/LoginPage"))
const SettingsPage = lazy(() => import("@/pages/settings/SettingsPage"))

export { AuthLayout, AppLayout, RegisterPage, SalesPage, LoginPage, SettingsPage }
