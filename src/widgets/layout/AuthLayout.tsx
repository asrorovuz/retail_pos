import { Outlet } from 'react-router'

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow rounded-2xl">
        <Outlet />
      </div>
    </div>
  )
}
