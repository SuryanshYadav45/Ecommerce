import "./Category.scss";
import React from 'react'
import Product from "../Products/Product/Product"
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Category = () => {
  const {id}=useParams();
  const{data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

  return (
    <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {data?.data?.[0].attributes?.categories?.data?.[0]?.attributes.title}
            </div>
           
            <Product innerpage={false} products={data}/>
        </div>
    </div>
  )
}

export default Category
