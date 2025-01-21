import './assets/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/api/apollo.client'
import { routeTree } from '@/routeTree.gen'

const router = createRouter({
  routeTree,
  defaultViewTransition: true
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <ApolloProvider client={client}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    </ApolloProvider>
  )
}
