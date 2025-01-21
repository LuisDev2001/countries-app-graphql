import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/country/$countryId')({
  component: CountryDetailView,
})

function CountryDetailView() {
  const { countryId } = Route.useParams()
  
  return <div>Hello "/country/$countryId"! { countryId }</div>
}
