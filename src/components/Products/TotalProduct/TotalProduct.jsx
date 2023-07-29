import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import "./TotalProducts.scss";
import Product from "../Product/Product";
import Products from "../Products";

const TotalProduct = () => {
  const { data } = useFetch(`/api/products?populate=*`);
  return (
    <div className="showProduct">
      <div className="topdiv">
        <h2>
          Total Products :<span>{data?.data?.length}</span>
        </h2>
        <div>
          
        </div>
      </div>

      <div className="listedproducts">
        {data?.data?.map((item) => (
          <Products key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default TotalProduct;
