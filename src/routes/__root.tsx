import { lazy, Suspense } from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { MainLayout } from '@/layouts/MainLayout'
import { NotFoundView } from '@/views/NotFoundView'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundView,
})

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

function RootComponent() {
  return (
    <>
      <MainLayout />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
