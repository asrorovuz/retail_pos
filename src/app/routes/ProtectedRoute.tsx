import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../providers/AuthProvider";
import Loading from "@/shared/ui/Loading";

export const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) return <Loading />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuthContext();

  if (loading) return <Loading />;
  if (isAuthenticated) return <Navigate to="/sales" replace />;

  return <Outlet />;
};
