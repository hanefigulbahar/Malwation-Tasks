interface ITableCellProps {
  text: string | number;
}

const TableHeader = ({ text }: ITableCellProps) => {
  return <th className="px-6 py-3">{text}</th>;
};

export default TableHeader;
