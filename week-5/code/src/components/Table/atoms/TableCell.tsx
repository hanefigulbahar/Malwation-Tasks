import { ReactNode } from 'react';

interface ITableCellProps {
  children: string | number | ReactNode;
}

const TableCell = ({ children }: ITableCellProps) => {
  return <td className="px-6 py-4">{children}</td>;
};

export default TableCell;
