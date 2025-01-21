import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { MainLayout } from '@/layouts/MainLayout'
import { NotFoundView } from '@/views/NotFoundView'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundView,
})

function RootComponent() {
  return (
    <>
      <MainLayout />
      <TanStackRouterDevtools />
    </>
  )
}
