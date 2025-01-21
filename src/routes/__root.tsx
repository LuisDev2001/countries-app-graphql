import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { MainLayout } from '@/layouts/MainLayout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <MainLayout />
      <TanStackRouterDevtools />
    </>
  )
}
