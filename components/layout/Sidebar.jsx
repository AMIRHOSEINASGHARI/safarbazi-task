// next
import Link from "next/link";
// constants
import { sidebar_links } from "@/constants";
// antd
import { Divider } from "antd";
// svg
import { IconArrowDown, Logo } from "../svgs";

const Sidebar = () => {
  return (
    <aside className="bg-[#0C50E8] w-[315px] flex flex-col gap-[33px] fixed z-20 right-0 bottom-0 top-0 pt-[33px] px-[40px] text-white">
      <Link href="/" className="flex items-center gap-[16px]">
        <Logo className="text-[58px]" />
        <p className="font-bold text-[20px]">همیارگشت‌سفربازی</p>
      </Link>
      <Divider
        style={{
          backgroundColor: "#fff",
        }}
      />
      <ul className="space-y-[10px]">
        {sidebar_links.map((link) => (
          <SidebarLink key={link.title} {...link} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

const SidebarLink = ({ icon, title, href, collapsable }) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between py-[10px] rounded-[10px]"
      >
        <div className="flex items-center gap-[20px]">
          <div className="icon_size">{icon}</div>
          <p>{title}</p>
        </div>
        {collapsable && <IconArrowDown className="text-[10px]" />}
      </Link>
    </li>
  );
};
