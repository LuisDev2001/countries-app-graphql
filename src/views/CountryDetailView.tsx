import { getRouteApi } from '@tanstack/react-router'

const routeApi = getRouteApi('/country/$countryId')

export function CountryDetailView() {
  const { countryId } = routeApi.useParams()
  
  return <div>Hello "/country/$countryId"! { countryId }</div>
}
