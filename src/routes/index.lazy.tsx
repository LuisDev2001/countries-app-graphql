import { createLazyFileRoute } from '@tanstack/react-router'
import { HomeView } from '@/views/HomeView'

export const Route = createLazyFileRoute('/')({
  component: HomeView,
})
