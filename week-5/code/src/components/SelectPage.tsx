import React from "react";
import Select from "./ui/Select";

const SelectPage = () => {
  const data: string[] = ["data1", "data2", "data3", "data4", "data5", "data6"];
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 items-center gap-5">
        <Select leftIcon="search" color="primary" size="large" data={data} />
        <Select leftIcon="search" color="primary" size="medium" data={data} />
        <Select leftIcon="search" color="primary" size="small" data={data} />
      </div>
      <div className="grid grid-cols-3 items-center gap-5">
        <Select leftIcon="search" color="secondary" size="large" data={data} />
        <Select leftIcon="search" color="secondary" size="medium" data={data} />
        <Select leftIcon="search" color="secondary" size="small" data={data} />
      </div>
      <div className="grid grid-cols-3 items-center gap-5">
        <Select leftIcon="search" color="tertiary" size="large" data={data} />
        <Select leftIcon="search" color="tertiary" size="medium" data={data} />
        <Select leftIcon="search" color="tertiary" size="small" data={data} />
      </div>
      <div className="grid grid-cols-3 items-center gap-5">
        <Select
          errorMessage="Error"
          leftIcon="search"
          color="primary"
          size="large"
          data={data}
        />
        <Select
          errorMessage="Error"
          leftIcon="search"
          color="primary"
          size="medium"
          data={data}
        />
        <Select
          errorMessage="Error"
          leftIcon="search"
          color="primary"
          size="small"
          data={data}
        />
      </div>
    </div>
  );
};

export default SelectPage;
