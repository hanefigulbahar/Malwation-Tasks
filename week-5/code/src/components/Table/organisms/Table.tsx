import React from 'react';
import TableHeader from '../atoms/TableHeader';
import TableRow, { ITableRowProps } from '../molecules/TableRow';
import TableRowHoc from '../../Hoc/TableRowHoc';

interface ITableProps {
  data: {
    headers: string[];
    rows: ITableRowProps[];
  };
}

const Table = ({ data }: ITableProps) => {
  const TableDeletedButton = TableRowHoc(TableRow);
  return (
    <div className="rounded-md shadow-md">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
          <tr>
            {data.headers.map((header) => (
              <TableHeader key={header} text={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <TableDeletedButton index={index} key={index} cells={row.cells} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
