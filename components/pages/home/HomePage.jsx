// react
import { Suspense } from "react";
// cmp
import LoaderBar from "@/components/shared/LoaderBar";
import ProductsTable from "./ui/ProductsTable";
import ProductTableHeader from "./ui/ProductTableHeader";
import SearchProducts from "./ui/SearchProducts";
import ProductsFilter from "./ui/ProductsFilter";
import PaginationBox from "./ui/PaginationBox";

const HomePage = ({ searchParams }) => {
  const title = searchParams?.title || "";
  const limit = Number(searchParams?.limit) || 10;
  const offset = Number(searchParams?.offset) || 0;
  const creationAt_min = searchParams?.creationAt_min || "";
  const creationAt_max = searchParams?.creationAt_max || "";

  return (
    <section className="bg-white shadow-[0_3px_6px_0_#F1F1F1] rounded-[10px]">
      <ProductTableHeader />
      <div className="flex items-center justify-between p-[30px] pb-[17px]">
        <SearchProducts />
        <ProductsFilter />
      </div>
      <Suspense
        fallback={<LoaderBar />}
        key={title + limit + offset + creationAt_min + creationAt_max}
      >
        <ProductsTable searchParams={searchParams} />
      </Suspense>
      <PaginationBox />
    </section>
  );
};

export default HomePage;
