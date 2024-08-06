// css
import "../styles/CalendarStyles.css";
// react
import { useEffect } from "react";
// date picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// svg
import {
  IconArrowDown,
  IconDateArrowLeft,
  IconDateArrowRight,
} from "@/components/svgs";
// constants
import { weekDays } from "@/constants";

const CreationDateFilter = ({
  setCreationAt_min,
  setCreationAt_max,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) => {
  useEffect(() => {
    if ({ fromDate, toDate }) {
      setCreationAt_min(fromDate?.toDate?.().toJSON());
    }
    if (toDate) {
      setCreationAt_max(toDate?.toDate?.().toJSON());
    }
  }, [fromDate, toDate]);

  const options = {
    calendar: persian,
    renderButton: (direction, handleClick) => (
      <button onClick={handleClick} className="px-[15px]">
        {direction === "right" ? (
          <IconDateArrowLeft className="w-[7.5px]" />
        ) : (
          <IconDateArrowRight className="w-[7.5px]" />
        )}
      </button>
    ),
    formatMonth: (month) => {
      return <span className="font-bold text-[18px]">{month}</span>;
    },
    formatYear: (year) => {
      return <span className="font-bold text-[18px]">{year}</span>;
    },
    mapDays: ({ date }) => {
      let props = {};
      let isWeekend = date.weekDay.index === 6;

      if (isWeekend)
        props.style = {
          color: "#FF8601",
        };

      return props;
    },
    locale: persian_fa,
    calendarPosition: "bottom-right",
    weekDays,
    style: {
      width: "100%",
    },
    containerStyle: {
      width: "100%",
    },
    shadow: false,
    offsetY: 8,
    className: "custom-calendar",
  };

  return (
    <div className="flex items-center justify-between gap-[25px] w-full">
      <DatePicker
        {...options}
        value={fromDate}
        onChange={setFromDate}
        arrow={false}
        render={
          <div className="relative">
            <input
              type="text"
              placeholder={fromDate ? fromDate?.toString() : "از تاریخ"}
              className="w-full p-[10px] border border-[#E2E2E2] rounded-[10px] outline-none placeholder:text-[#76869D] placeholder:p1"
            />
            <IconArrowDown className="text-[10px] text-[#36465D] absolute left-[19px] top-[18px]" />
          </div>
        }
      />
      <DatePicker
        {...options}
        value={toDate}
        onChange={setToDate}
        arrow={false}
        render={
          <div className="relative">
            <input
              type="text"
              placeholder={toDate ? toDate?.toString() : "تا تاریخ"}
              className="w-full p-[10px] border border-[#E2E2E2] rounded-[10px] outline-none placeholder:text-[#76869D] placeholder:p1"
            />
            <IconArrowDown className="text-[10px] text-[#36465D] absolute left-[19px] top-[18px]" />
          </div>
        }
      />
    </div>
  );
};

export default CreationDateFilter;
