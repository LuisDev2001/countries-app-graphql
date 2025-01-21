
import { getRouteApi, Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useCountry from '@/hooks/useCountry'
import { useEffect } from 'react'

const routeApi = getRouteApi('/country/$countryId')

export function CountryDetailView() {
  const { countryId } = routeApi.useParams()
  const { getCountry, country } = useCountry(countryId)

  useEffect(() => {
    getCountry()
  }, [countryId, getCountry])

  return (
    <div className="container mx-auto p-4">
      <Link to="/">
        <Button variant="ghost" size="icon" className="mb-4">
          <ChevronLeft />
        </Button>
      </Link>
      <h1 className="scroll-m-20 mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {country?.name} - {countryId}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="scroll-m-20 mb-4 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Details
          </h2>
          <p><strong>Code:</strong> {country?.code}</p>
          <p><strong>Capital:</strong> {country?.capital}</p>
          <p><strong>Currency:</strong> {country?.currency}</p>
          <p><strong>Continent:</strong> {country?.continent?.name}</p>
        </div>
        <div>
          <h2 className="scroll-m-20 mb-4 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Languages
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {country?.languages?.map((language) => (
              <li key={language?.name}>{language?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
