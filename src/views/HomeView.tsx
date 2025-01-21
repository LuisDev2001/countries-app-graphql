import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CountryDataTable } from '@/components/CountryDataTable'

import type { ColumnDef } from '@tanstack/react-table'
import type { Columns } from '@/models/country.table.models'

const columns: ColumnDef<Columns>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'continentName',
    header: 'Continent',
  },
  {
    accessorKey: 'actions',
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

const data = [
  {
    code: 'US',
    name: 'United States',
    continentName: 'North America',
    actions: 'Edit Delete',
  },
  {
    code: 'CA',
    name: 'Canada',
    continentName: 'North America',
    actions: 'Edit Delete',
  },
]

export function HomeView() {
  return <>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Welcome to my Country App
    </h1>
    <CountryDataTable columns={columns} data={data} />
  </>
}
