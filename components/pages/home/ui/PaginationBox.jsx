"use client";

import { IconArrowDown } from "@/components/svgs";
// hooks
import { useSetSearchParams } from "@/hooks/setSearchQuery";
// antd
import { Select } from "antd";
// constants
import { pagination_options } from "@/constants";

const PaginationBox = () => {
  const { setSearchParams } = useSetSearchParams();

  const handleChange = (value) => {
    setSearchParams("limit", value);
  };

  const labelRender = (props) => {
    const { value } = props;
    return <span>تعداد نتایج: {value} مورد</span>;
  };

  return (
    <div className="px-[30px] py-[17px]">
      <Select
        defaultValue="10"
        style={{
          width: "176px",
          height: "46px",
        }}
        onChange={handleChange}
        options={pagination_options}
        labelRender={labelRender}
        placement="bottomRight"
        dropdownStyle={{
          boxShadow: "none",
          width: "182px",
          border: "1px solid #E2E2E2",
        }}
        suffixIcon={
          <IconArrowDown className="text-[#36465D] w-[10px] absolute left-[8px]" />
        }
      />
    </div>
  );
};

export default PaginationBox;
