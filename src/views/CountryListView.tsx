import { CountriesDataTable } from '@/components/CountriesDataTable'
import { LoaderFullScreen } from '@/components/LoaderFullScreen'
import useCountries from '@/hooks/useCountries'
import useContinents from '@/hooks/useContinents'


export function HomeView() {
  const {
    countries,
    isLoadingCountries,
    errorCountries,
    currencies,
    columns
  } = useCountries()
  const { continents, isLoadingContinents, errorContinents } = useContinents()

  if (isLoadingCountries || isLoadingContinents) return <LoaderFullScreen text='Loading information...' />
  if (errorCountries || errorContinents) return <p>Error: {errorCountries?.message ?? errorContinents?.message}</p>

  return <div className='space-y-6 w-full'>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Country List App
    </h1>
    <CountriesDataTable
      columns={columns}
      data={countries}
      continentList={continents}
      currencies={currencies}
    />
  </div>
}
