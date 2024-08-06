// next
import Image from "next/image";
// constants
import { products_columns } from "@/constants/tables/columns";
// utils
import { e2p, shorterText } from "@/utils/functions";
import { ApiProducts } from "@/utils/Api/api";
// antd
import { Table } from "antd";
// calendar
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

// fetch request to get products list
const getProducts = async (searchParams) => {
  const {
    title = "",
    limit = 10,
    offset = 0,
    creationAt_min = 0,
    creationAt_max = 0,
  } = searchParams;

  const url = `${ApiProducts}?limit=${limit}&offset=${offset}&title=${title}&creationAt_min=${creationAt_min}&creationAt_max=${creationAt_max}`;

  const res = await fetch(url);
  const data = await res.json();

  return JSON.parse(JSON.stringify(data));
};

const ProductsTable = async ({ searchParams }) => {
  try {
    const products = await getProducts(searchParams);

    // table data sourse
    const data_sourse = products?.map((product) => {
      const date = new DateObject({
        calendar: persian,
        locale: persian_fa,
        date: product?.creationAt,
      });

      return {
        key: product?.id,
        id: (
          <div>
            <p>{e2p(product?.id)}</p>
          </div>
        ),
        title: (
          <div className="min-w-[150px]">
            <p>{shorterText(product?.title, 20)}</p>
          </div>
        ),
        description: (
          <div className="min-w-[270px]">
            <p>{shorterText(product?.description, 40)}</p>
          </div>
        ),
        price: (
          <div className="min-w-[60px]">
            <p>{e2p(product?.price.toLocaleString())} تومان</p>
          </div>
        ),
        creationAt: `${e2p(date.hour)}:${e2p(date.minute)} - ${date.format()}`,
        categoryName: product?.category?.name,
        image: (
          <Image
            src={"/no-image.png"}
            width={40}
            height={40}
            alt="image"
            priority
            className="rounded-full outline outline-1 outline-[#D9D9D9]"
          />
        ),
      };
    });

    return (
      <div className="px-[20px] py-[17px]">
        <Table
          columns={products_columns}
          dataSource={data_sourse}
          pagination={false}
          scroll={{
            x: true,
          }}
        />
      </div>
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export default ProductsTable;
