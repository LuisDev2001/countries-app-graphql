import { useState } from 'react'
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { ColumnDef } from '@tanstack/react-table'
import type { Continent } from '@/models/continent.models'

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  continentList: Continent[]
  currencies: string[]
  data: TData[]
}

export function CountriesDataTable<TData, TValue>({
  columns,
  continentList,
  currencies,
  data,
}: DataTableProps<TData, TValue>){

  const [columnFilters, setColumnsFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    columns,
    data,
    onColumnFiltersChange: setColumnsFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    }
  })

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <Input
          placeholder="Filter countries..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full lg:max-w-sm"
        />

        <div
          className={`grid justify-end gap-4 ${
            table.getColumn("continent_name")?.getFilterValue() || table.getColumn("currency")?.getFilterValue()
              ? 'grid-cols-[auto,150px,150px]'
              : 'grid-cols-2 lg:grid-cols-[150px,150px]'
          }`}
        >
          {
            table.getColumn("continent_name")?.getFilterValue() || table.getColumn("currency")?.getFilterValue()
              ? (
                <Button variant="ghost" onClick={() => table.resetColumnFilters()}>
                  Clear filters
                </Button>
              )
              : null
          }

          <Select
            value={(table.getColumn("continent_name")?.getFilterValue() as string) ?? ""}
            onValueChange={(value) => {
              table.getColumn('continent_name')?.setFilterValue(value)
            }}
          >
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select continent" />
            </SelectTrigger>
            <SelectContent side="top">
              {continentList.map((continent) => (
                <SelectItem key={continent.code} value={`${continent.name}`}>
                  {continent.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={(table.getColumn("currency")?.getFilterValue() as string) ?? ""}
            onValueChange={(value) => {
              table.getColumn('currency')?.setFilterValue(value)
            }}
          >
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent side="top">
              {currencies.map((currency) => (
                <SelectItem key={currency} value={`${currency}`}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border w-full">
        <div className="border-b">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="max-h-96 overflow-auto">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-72 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end p-2 gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 15, 20].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <ChevronsLeft />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRight />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <ChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
