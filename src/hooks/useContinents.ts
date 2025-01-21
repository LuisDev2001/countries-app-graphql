import { useQuery } from "@apollo/client"
import { GET_CONTINENTS } from "@/queries/getContinents.query"
import type { CountinentResponse } from "@/models/continent.models"

const useContinent = () => {
  const { data, loading, error } = useQuery<CountinentResponse>(GET_CONTINENTS)

  return {
    continents: data?.continents || [],
    isLoadingContinents: loading,
    errorContinents: error,
  }
}

export default useContinent