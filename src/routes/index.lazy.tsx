import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: HomeView,
})

function HomeView() {
  return <div>Hello "/"!</div>
}
