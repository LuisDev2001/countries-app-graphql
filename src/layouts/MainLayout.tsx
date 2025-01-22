import { Outlet } from '@tanstack/react-router'
import { DarkModeButton } from '@/components/DarkModeButton'

export const MainLayout = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]">
      <div className="fiex top-0 right-0 p-4 absolute">
        <DarkModeButton></DarkModeButton>
      </div>
      <Outlet />
    </div>
  )
}