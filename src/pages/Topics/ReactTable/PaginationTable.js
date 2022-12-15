import React, { useMemo } from "react";
import { 
    useTable, 
    usePagination,
    // Adding Filtering Table component code here
    useFilters,
    useGlobalFilter
} from "react-table";
import MOCK_DATA from "./Utilities/MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./Utilities/columns";
import "./Utilities/table.css";

// Adding FilteringTable component code here
import { GlobalFilter } from './Utilities/GlobalFilter'

export const PaginationTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    // As error insists I Adding FilteringTable component code above usePagination plugin
    useFilters,
    useGlobalFilter,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    // Adding FilteringTable component code here
    setGlobalFilter
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>{
            [10, 25, 50].map(pageSize => {
                return (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                )
            })
          }</select>
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};
