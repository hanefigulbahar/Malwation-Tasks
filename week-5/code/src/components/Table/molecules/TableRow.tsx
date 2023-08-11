import { ReactNode } from 'react';
import TableCell from '../atoms/TableCell';
import Button from '../../Button/Button';
export interface ITableRowProps {
  cells: (number | string)[];
  children?: ReactNode;
}
const TableRow = ({ cells, children }: ITableRowProps) => {
  return (
    <tr className="border-b bg-white hover:bg-gray-50">
      {cells.map((cell, i) => (
        <TableCell key={i}>{cell}</TableCell>
      ))}
      <TableCell>{children}</TableCell>
    </tr>
  );
};

export default TableRow;
