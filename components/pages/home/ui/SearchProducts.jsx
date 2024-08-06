"use client";

// hooks
import { useSetSearchParams } from "@/hooks/setSearchQuery";
// debounce
import { useDebouncedCallback } from "use-debounce";

const SearchProducts = () => {
  const { searchParams, setSearchParams } = useSetSearchParams();

  const handleSearchQuery = useDebouncedCallback((query) => {
    setSearchParams("title", query);
  }, 500);

  return (
    <input
      type="text"
      placeholder="جستجو..."
      className="w-[365px] p-[10px] border border-[#E2E2E2] rounded-[10px] outline-none placeholder:text-[#76869D] placeholder:p1"
      onChange={(e) => {
        handleSearchQuery(e.target.value);
      }}
      defaultValue={
        !!searchParams.get("title")?.toString()
          ? searchParams.get("title")?.toString()
          : ""
      }
    />
  );
};

export default SearchProducts;
