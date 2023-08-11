import React, { ReactNode } from 'react';
import TableRow, { ITableRowProps } from '../Table/molecules/TableRow';
import Button from '../Button/Button';

const TableRowHoc = (OldComponent: React.FC<ITableRowProps>) => {
  return function WithDeleteButton(props: any) {
    const deleteHandle = (index: number) => {
      alert(index + ' deleted');
    };

    return (
      <>
        <OldComponent {...props}>
          <Button
            onClick={() => deleteHandle(props.index)}
            color="primary"
            variants="warning"
          >
            Delete
          </Button>
        </OldComponent>
      </>
    );
  };
};

export default TableRowHoc;

/*<Button
 const deleteHandle = (index: number) => {
    console.log(index);
  };
        onClick={() => deleteHandle(index)}
        color="primary"
        variants="warning"
      >
        Delete
      </Button>*/
