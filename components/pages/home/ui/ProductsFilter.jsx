"use client";

// react
import { useState } from "react";
// hooks
import { useSetSearchParams } from "@/hooks/setSearchQuery";
// svg
import {
  IconArrowLeft,
  IconCross,
  IconFilter,
  IconFilterPlus,
} from "@/components/svgs";
// antd
import { Button, Modal } from "antd";
// cmp
import CreationDateFilter from "./CreationDateFilter";

const ProductsFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creationAt_min, setCreationAt_min] = useState();
  const [creationAt_max, setCreationAt_max] = useState();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  // custom hook
  const { setSearchParams } = useSetSearchParams();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (!creationAt_min || !creationAt_max) return;

    setSearchParams("creationAt_min", creationAt_min);
    setSearchParams("creationAt_max", creationAt_max);

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFromDate();
    setToDate();
  };

  const modal_title = (
    <div className="flex items-center justify-between border-b px-[20px] py-[17px]">
      <div className="flex items-center sm_box_gap">
        <IconFilter className="icon_size" />
        <p className="p1 font-bold">فیلترها</p>
      </div>
      <Button
        style={{
          backgroundColor: "#fff",
          color: "#000",
          border: "none",
        }}
        onClick={handleCancel}
      >
        <IconCross className="icon_size" />
      </Button>
    </div>
  );

  const modal_content = (
    <div className="flex flex-col gap-[25px] py-[30px] px-[25px]">
      <div className="flex items-center sm_box_gap">
        <IconFilterPlus className="icon_size" />
        <p className="p1 font-bold">افزودن فیلتر</p>
      </div>
      <CreationDateFilter
        setCreationAt_min={setCreationAt_min}
        setCreationAt_max={setCreationAt_max}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
      <div className="flex items-center justify-between gap-[25px] w-full">
        <Button
          style={{
            width: "100%",
            paddingBlock: "20px",
            backgroundColor: "#fff",
            color: "#36465D",
            fontSize: "14px",
            fontWeight: "bold",
            border: "1px solid #36465D",
            borderRadius: "10px",
          }}
          onClick={handleCancel}
        >
          انصراف
        </Button>
        <Button
          style={{
            width: "100%",
            paddingBlock: "20px",
            backgroundColor: "#0C50E8",
            border: "none",
            fontSize: "14px",
            fontWeight: "bold",
            position: "relative",
            borderRadius: "10px",
          }}
          onClick={handleOk}
        >
          <IconArrowLeft className="absolute left-[11px]" />
          مشاهده نتایج
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-[10px]">
      <span>مرتب‌سازی:</span>
      <Button
        style={{
          padding: "11px 20px",
          width: "131px",
          height: "46px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
        onClick={showModal}
      >
        فیلترها
      </Button>
      <Modal
        title={modal_title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closeIcon={false}
        styles={{
          content: {
            padding: 0,
            borderRadius: "10px",
          },
        }}
      >
        {modal_content}
      </Modal>
    </div>
  );
};

export default ProductsFilter;
