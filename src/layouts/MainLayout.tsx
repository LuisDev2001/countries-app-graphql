import { Outlet } from '@tanstack/react-router'

export const MainLayout = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]">
      <Outlet />
    </div>
  )
}