import { Outlet } from '@tanstack/react-router'

export const MainLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  )
}