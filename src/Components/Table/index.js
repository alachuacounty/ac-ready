import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
//import tableStyles from "./table-styles";

const customTotal = (from, to, size) => (
  <span className='react-bootstrap-table-pagination-total'>
    Showing {from} to {to} of {size} Results
  </span>
);

export default function EnhancedTable({ rowData, dataColumns }) {
  const options = {
    paginationSize: 4,
    //pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    hideSizePerPage: false, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: '5',
        value: 5,
      },
      {
        text: '10',
        value: 10,
      },
      {
        text: 'All',
        value: rowData.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <div>
      <BootstrapTable
        keyField='id'
        data={rowData}
        columns={dataColumns}
        bordered={false}
        pagination={paginationFactory(options)}
        filter={filterFactory()}
        wrapperClasses='overflow-scroll'
      />
      <style jsx global>
        {/* {tableStyles} */}
      </style>
    </div>
  );
}
