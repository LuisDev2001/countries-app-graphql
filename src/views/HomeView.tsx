import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from '@/components/ui/input'
import { CountriesDataTable } from '@/components/CountriesDataTable'
import useCountries from '@/hooks/useCountries'

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
  const { countries, loading, error } = useCountries()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return <>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Welcome to my Country App
    </h1>
    <div className="w-full flex items-center py-4 lg:max-w-4xl">
      <Input
        placeholder="Filter countries..."
        className="max-w-sm"
      />
    </div>
    <CountriesDataTable
      columns={columns}
      data={countries}
    />
  </>
}
