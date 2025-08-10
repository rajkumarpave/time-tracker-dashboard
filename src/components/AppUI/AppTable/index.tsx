import React, { useState } from "react";
import AppButton from "../AppButton";
import AppTypography from "../AppTypography";

// Define the types for table data
interface TableData {
  [key: string]: any; // Allow dynamic key-value pairs
}

// Column type with optional render function
interface TableColumn {
  label: string;
  field: string; // Field name in data
  render?: (value: any, row: TableData) => React.ReactNode; // Custom render function for the cell
}

type AppTableStyles = {
  tableRowStyle?: {
    [key: string]: any;
  };
  tableRowClassName?: string;
  tableHeaderStyle?: {
    [key: string]: any;
  };
  tableHeaderClassName?: string;
  tableBodyStyle?: {
    [key: string]: any;
  };
  tableBodyClassName?: string;
  tableStyle?: {
    [key: string]: any;
  };
  tableClassName?: string;
};

// Props for AppTable
interface AppTableProps {
  columns: TableColumn[]; // Dynamic table columns
  data: TableData[]; // Table data
  rowsPerPage?: number; // Number of rows per page (default 10)
  disablePagination?: boolean;
  hideTableHeader?: boolean;
  tableStyles?: AppTableStyles;
}

const AppTable: React.FC<AppTableProps> = ({
  columns,
  data,
  rowsPerPage = 10,
  disablePagination = false,
  hideTableHeader = false,
  tableStyles = {},
}) => {
  // State for current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get the data for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = disablePagination
    ? data
    : data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className={`overflow-x-auto`}>
        <table
          className={`min-w-full table-auto border-collapse ${
            tableStyles.tableClassName || ""
          }`}
          style={tableStyles.tableStyle}
        >
          {/* Table Header */}
          {!hideTableHeader && (
            <thead
              className={`${tableStyles.tableHeaderClassName || ""}`}
              style={tableStyles.tableHeaderStyle}
            >
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-4 py-2 border-b border-gray-300"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          {/* Table Body */}
          <tbody
            className={`${tableStyles.tableBodyClassName || ""}`}
            style={tableStyles.tableBodyStyle}
          >
            {currentData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-100 ${
                  tableStyles.tableRowClassName || ""
                }`}
                style={tableStyles.tableRowStyle}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {column.render
                      ? column.render(row[column.field], row) // Render custom cell if render is provided
                      : row[column.field]}{" "}
                    {/* Render default data */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      {!disablePagination && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <AppButton
            variant="outlined"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </AppButton>
          <AppTypography variant="caption">
            {currentPage} / {totalPages}
          </AppTypography>
          <AppButton
            variant="outlined"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </AppButton>
        </div>
      )}
    </>
  );
};

export default AppTable;
