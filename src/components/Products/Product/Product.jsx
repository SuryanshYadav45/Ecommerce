import "./Product.scss";
import React, { useEffect } from 'react'
import Products from "../Products";
import { useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "../../../utils/api";


const Product = (props) => {
  
  const navigate=useNavigate();
  return (
    <div className="product-container" >
        {props.innerpage && <div className="sec-heading">{props.text}</div>}
        <div className="products">
        {props.products?.data?.map((item)=>
        (<>
          <Products data1={item} key={item.id} id={item.id} data={item.attributes}    />
          
          </>
        ))}
                
                
        </div>
    </div>
  )
}

export default Product
