// next
import Image from "next/image";
// svg
import { IconComment, IconDocument, IconMail, IconUser } from "../svgs";

const Navbar = () => {
  return (
    <header className="fixed z-10 left-0 top-0 right-0 pr-[365px] pl-[50px] flex items-center justify-between bg-white border-b border-[#E2E2E2] w-full h-[124px]">
      <div className="flex items-center gap-[15px]">
        <Image
          src="/icons/calendar.png"
          width={30}
          height={30}
          alt="Calendar"
          priority
        />
        <div>
          <h1 className="font-bold p1">یکشنبه ۲۶ تیر ۱۴۰۱</h1>
          <p className="p2">۲۱:۴۷:۲۰</p>
        </div>
      </div>
      <div className="flex items-center sm_box_gap">
        <div className="icon_border icon_border flex items-center gap-[15px]">
          <p className="p1">محدثه زمانی</p>
          <IconUser className="icon_color icon_size" />
        </div>
        <div className="icon_border icon_border">
          <IconDocument className="icon_color icon_size" />
        </div>
        <div className="icon_border icon_border">
          <IconComment className="icon_color icon_size" />
        </div>
        <div className="icon_border icon_border">
          <IconMail className="icon_color icon_size" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
