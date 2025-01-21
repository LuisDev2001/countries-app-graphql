import { Outlet } from '@tanstack/react-router'

export const MainLayout = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col gap-6 flex-wrap justify-center items-center h-screen">
      <Outlet />
    </div>
  )
}