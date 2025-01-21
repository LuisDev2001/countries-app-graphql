import { useLazyQuery } from "@apollo/client"

import { GET_COUNTRY } from "@/queries/getCountry.query"
import { GetCountryResponse } from "@/models/country.models"

const useCountry = (countryCode: string) => {
  const [getCountry, { loading, data }] = useLazyQuery<GetCountryResponse>(GET_COUNTRY, {
    variables: { code: countryCode }
  })

  return {
    getCountry,
    loading,
    country: data?.country
  }
}

export default useCountry