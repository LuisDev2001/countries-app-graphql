import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '@/queries/getCountries.query'
import type { CountryResponse } from '@/models/country.models'

const useCountries = () => {
  const { data, loading, error } = useQuery<CountryResponse>(GET_COUNTRIES)

  return {
    countries: data?.countries || [],
    isLoadingCountries: loading,
    errorCountries: error,
  }
}

export default useCountries