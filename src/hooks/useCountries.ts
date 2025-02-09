import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '@/queries/getCountries.query'
import { useCurrencyStore } from '@/stores/currency.store'
import { columns } from '@/components/CountryTableColumns'
import type { GetCountriesResponse } from '@/models/country.models'

const useCountries = () => {
  const { data, loading, error } = useQuery<GetCountriesResponse>(GET_COUNTRIES)

  const updateCurrencies = useCurrencyStore((state) => state.updateCurrencies)
  const currencies = useCurrencyStore((state) => state.currencies)

  useEffect(() => {
    if (data?.countries) {
      const currencies = data.countries
        .flatMap((country) => country.currency?.split(','))
        .filter(Boolean)
      
      const uniqueCurrencies = Array.from(new Set(currencies.filter((currency): currency is string => currency !== null))) 
      updateCurrencies(uniqueCurrencies)
    }
  }, [data, updateCurrencies])
  

  return {
    countries: data?.countries || [],
    isLoadingCountries: loading,
    errorCountries: error,
    currencies,
    columns
  }
}

export default useCountries