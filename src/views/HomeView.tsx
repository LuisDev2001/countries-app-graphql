import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CountriesDataTable } from '@/components/CountriesDataTable'
import useCountries from '@/hooks/useCountries'
import useContinents from '@/hooks/useContinents'

import type { ColumnDef } from '@tanstack/react-table'
import type { Country } from '@/models/country.models'

const columns: ColumnDef<Country>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'continent.name',
    header: 'Continent',
  },
  {
    accessorKey: 'currency',
    header: 'Currency',
    cell: ({ row }) => {
      const currency = row.getValue('currency')
      return currency || '-'
    }
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const data = row.original
      
      return (
        <div className='text-right'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link to="/country/$countryId" params={{ countryId: data.code }}>
                  <ChevronRight size="18"></ChevronRight>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>See details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )
    }
  },
]

export function HomeView() {
  const { countries, isLoadingCountries, errorCountries } = useCountries()
  const { continents, isLoadingContinents, errorContinents } = useContinents()

  if (isLoadingCountries || isLoadingContinents) return <p>Loading...</p>
  if (errorCountries || errorContinents) return <p>Error: {errorCountries?.message ?? errorContinents?.message}</p>

  return <>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Welcome to my Country App
    </h1>
    <CountriesDataTable
      columns={columns}
      data={countries}
      continentList={continents}
    />
  </>
}
