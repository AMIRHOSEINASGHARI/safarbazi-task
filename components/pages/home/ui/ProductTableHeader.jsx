// svg
import { IconUsers } from "@/components/svgs";

const ProductTableHeader = () => {
  return (
    <div className="sm_box_gap flex items-center border-b border-[#E2E2E2] px-[30px] py-[17px]">
      <IconUsers className="icon_size" />
      <p className="p1 font-bold">مدیریت محصولات</p>
    </div>
  );
};

export default ProductTableHeader;
