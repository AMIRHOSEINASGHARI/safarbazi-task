// svgs
import {
  IconHome,
  IconUsers,
  IconUserPlus,
  IconBooks,
  IconComment,
  IconCamera,
} from "../components/svgs/index.js";

export const sidebar_links = [
  {
    icon: <IconHome />,
    title: "خانه",
    href: "/",
    collapsable: false,
  },
  {
    icon: <IconUsers />,
    title: "کاربران",
    href: "/",
    collapsable: true,
  },
  {
    icon: <IconUserPlus />,
    title: "دسترسی‌ها",
    href: "/",
    collapsable: true,
  },
  {
    icon: <IconBooks />,
    title: "شماره‌ها",
    href: "/",
    collapsable: true,
  },
  {
    icon: <IconComment />,
    title: "پیامک‌ها",
    href: "/",
    collapsable: true,
  },
  {
    icon: <IconCamera />,
    title: "امور مالی",
    href: "/",
    collapsable: true,
  },
];

export const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export const pagination_options = [
  {
    value: "5",
    label: "۵ مورد نمایش در صفحه",
  },
  {
    value: "10",
    label: "۱۰ مورد نمایش در صفحه",
  },
  {
    value: "15",
    label: "۱۵ مورد نمایش در صفحه",
  },
  {
    value: "20",
    label: "۲۰ مورد نمایش در صفحه",
  },
];
