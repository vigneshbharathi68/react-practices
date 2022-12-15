import { format } from 'date-fns';
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "Data of Birth",
    Footer: "Data of Birth",
    accessor: "date_of_birth",
    Cell: ({value}) => { return format(new Date(value), 'dd/mm/yyyy') },
    disableFilters: true,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country"
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    // Filter: ColumnFilter,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Data of Birth",
        Footer: "Data of Birth",
        accessor: "date_of_birth",
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy') } 
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country"
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
      },
    ],
  },
];
