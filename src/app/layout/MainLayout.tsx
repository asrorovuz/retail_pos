import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div className="h-screen overflow-hidden">
        <Outlet />
    </div>
  );
};
