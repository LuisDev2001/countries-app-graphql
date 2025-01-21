import { Outlet } from '@tanstack/react-router'

export const MainLayout = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-6 justify-center items-center">
      <Outlet />
    </div>
  )
}