import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div>
        <Link to="/">
          Paises
        </Link>
        <Link to="/country/$countryId" params={{ countryId: '1' }}>
          Detalle
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
