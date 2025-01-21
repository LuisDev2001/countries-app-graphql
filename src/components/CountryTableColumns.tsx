import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { ColumnDef } from '@tanstack/react-table'
import type { Country } from '@/models/country.models'

export const columns: ColumnDef<Country>[] = [
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