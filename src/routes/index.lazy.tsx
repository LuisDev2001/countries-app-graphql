import { createLazyFileRoute } from '@tanstack/react-router'
import { HomeView } from '@/views/CountryListView'

export const Route = createLazyFileRoute('/')({
  component: HomeView,
})
