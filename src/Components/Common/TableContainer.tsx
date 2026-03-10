import React, { Fragment } from "react";
import {
  useReactTable,
  GlobalFiltering,
  ColumnFiltering,
  RowSorting,
  RowExpanding,
  RowPagination,
  RowSelection,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  Column
} from "@tanstack/react-table";
import { useDebouncedCallback as useAsyncDebounce } from "use-debounce";
import { Table, Row, Col, Button, Input, CardBody } from "reactstrap";
import { Filter, DefaultColumnFilter } from "./filters";
import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter
} from "./GlobalSearchFilter";
import classNames from "classnames";
type GlobalFilterProps = {  
  preGlobalFilteredRows: any,
  globalFilter: any,
  setGlobalFilter: any,
  isCustomerFilter: boolean,
  isOrderFilter: boolean,
  isContactsFilter: boolean,
  isCompaniesFilter: boolean,
  isCryptoOrdersFilter: boolean,
  isInvoiceListFilter: boolean,
  isTicketsListFilter: boolean,
  isNFTRankingFilter: boolean,
  isTaskListFilter: boolean,
  isProductsFilter: boolean,
  isLeadsFilter: boolean,
  SearchPlaceholder: any}
// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isProductsFilter,
  isLeadsFilter,
  SearchPlaceholder
}: GlobalFilterProps) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      <CardBody className="border border-dashed border-end-0 border-start-0">
        <form>
          <Row className="g-3">
            <Col>
              <div
                className={
                  isProductsFilter ||
                  isContactsFilter ||
                  isCompaniesFilter ||
                  isNFTRankingFilter
                    ? "search-box me-2 mb-2 d-inline-block"
                    : "search-box me-2 mb-2 d-inline-block col-12"
                }
              >
                <input
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                  id="search-bar-0"
                  type="text"
                  className="form-control search /"
                  placeholder={SearchPlaceholder}
                  value={value || ""}
                />
                <i className="bx bx-search-alt search-icon"></i>
              </div>
            </Col>
            {/* {isProductsFilter && <ProductsGlobalFilter />}
            {isCustomerFilter && <CustomersGlobalFilter />}
            {isOrderFilter && <OrderGlobalFilter />}
            {isContactsFilter && <ContactsGlobalFilter />}
            {isCompaniesFilter && <CompaniesGlobalFilter />}
            {isLeadsFilter && <LeadsGlobalFilter />}
            {isCryptoOrdersFilter && <CryptoOrdersGlobalFilter />}
            {isInvoiceListFilter && <InvoiceListGlobalSearch />}
            {isTicketsListFilter && <TicketsListGlobalFilter />}
            {isNFTRankingFilter && <NFTRankingGlobalFilter />}
            {isTaskListFilter && <TaskListGlobalFilter />} */}
          </Row>
        </form>
      </CardBody>
    </React.Fragment>
  );
}

type TableContainerProps<T> = {
  columns: ColumnDef<T, any>[],
  data: T[],
  isGlobalSearch: boolean,
  isGlobalFilter: boolean,
  isProductsFilter: boolean,
  isCustomerFilter: boolean,
  isOrderFilter: boolean,
  isContactsFilter: boolean,
  isCompaniesFilter: boolean,
  isLeadsFilter: boolean,
  isCryptoOrdersFilter: boolean,
  isInvoiceListFilter: boolean,
  isTicketsListFilter: boolean,
  isNFTRankingFilter: boolean,
  isTaskListFilter: boolean,
  isAddOptions: boolean,
  isAddUserList: boolean,
  isAddCustList:boolean,
  handleOrderClicks: any,
  handleUserClick: any,
  handleCustomerClick: any,
  customPageSize: any,
  tableClass: string,
  theadClass: string,
  trClass: string,
  thClass: string,
  divClass: string,
  SearchPlaceholder: any
}
const TableContainer = <T,>({
  columns,
  data,
  isGlobalSearch,
  isGlobalFilter,
  isProductsFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isCompaniesFilter,
  isLeadsFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  divClass,
  SearchPlaceholder
}: TableContainerProps<T>) => {
  const table = useReactTable({
    columns,
    data,
    defaultColumn: {},
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: customPageSize,
      },
      rowSelection: {0: true},
      sorting: [{id: 'product', desc: true}]
    },
    _features: [
      GlobalFiltering,
      ColumnFiltering,
      RowSorting,
      RowExpanding,
      RowPagination,
      RowSelection
    ],
    getCoreRowModel: getCoreRowModel()
  });
  const {
    getHeaderGroups,
    getRowModel,
    getCanNextPage,
    getCanPreviousPage,
    getPageOptions,
    getState,
    setPageIndex,
    nextPage,
    previousPage,
    setPageSize,
    getPreFilteredRowModel,
    setGlobalFilter
  } = table;
  const generateSortingIndicator = (column: Column<typeof data[0]>) => {
    
    const sortType = column.getIsSorted();
    return sortType === 'asc' ? "" : " ";
  };

  const onChangeInSelect = (event: any) => {
    setPageSize(Number(event.target.value));
  };
  const onChangeInInput = (event:any) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    setPageIndex(page);
  };

  return (
    <Fragment>
      <Row className="mb-3">
        {isGlobalSearch && (
          <Col md={1}>
            <select
              className="form-select"
              value={getState().pagination.pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}
        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={getPreFilteredRowModel().rows}
            globalFilter={getState().globalFilter}
            setGlobalFilter={setGlobalFilter}
            isProductsFilter={isProductsFilter}
            isCustomerFilter={isCustomerFilter}
            isOrderFilter={isOrderFilter}
            isContactsFilter={isContactsFilter}
            isCompaniesFilter={isCompaniesFilter}
            isLeadsFilter={isLeadsFilter}
            isCryptoOrdersFilter={isCryptoOrdersFilter}
            isInvoiceListFilter={isInvoiceListFilter}
            isTicketsListFilter={isTicketsListFilter}
            isNFTRankingFilter={isNFTRankingFilter}
            isTaskListFilter={isTaskListFilter}
            SearchPlaceholder={SearchPlaceholder}
          />
        )}
        {isAddOptions && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>

      <div className={classNames(divClass, 'gridjs-wrapper')}>
        <table className={classNames(tableClass, 'gridjs-table')}>
          <thead className={classNames(theadClass, 'gridjs-thead')}>
            {getHeaderGroups().map((headerGroup) => (
              <tr className={trClass} key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={classNames(thClass, 'gridjs-th')}
                    {...header}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {generateSortingIndicator(header.column)}
                    {/* <Filter column={column} /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className={"gridjs-tbody"}>
            {getRowModel().rows.map((row) => {
              return (
                <Fragment key={row.id}>
                  <tr className={"gridjs-tr"}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <Row className="justify-content-md-end justify-content-center align-items-center p-2">
        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button
              color="primary"
              onClick={previousPage}
              disabled={!getCanPreviousPage()}
            >
              {"<"}
            </Button>
          </div>
        </Col>
        <Col className="col-md-auto d-none d-md-block">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {getPageOptions().length}
          </strong>
        </Col>
        <Col className="col-md-auto">
          <Input
            type="number"
            min={1}
            style={{ width: 70 }}
            max={getPageOptions().length}
            defaultValue={getState().pagination.pageIndex + 1}
            onChange={onChangeInInput}
          />
        </Col>

        <Col className="col-md-auto">
          <div className="d-flex gap-1">
            <Button
              color="primary"
              onClick={nextPage}
              disabled={!getCanNextPage()}
            >
              {">"}
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TableContainer;
