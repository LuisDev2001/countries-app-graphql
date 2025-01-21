import { createFileRoute } from '@tanstack/react-router'
import { CountryDetailView } from '@/views/CountryDetailView'

export const Route = createFileRoute('/country/$countryId')({
  component: CountryDetailView,
})
