import "./Products.scss";
import React, { useContext } from 'react'
import prod from "../../assets/products/earbuds-prod-1.webp"
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import { AiOutlineHeart } from "react-icons/ai";

const Products = (props) => {
  const { addToWishlist } = useContext(Context);
  const handleClick = () => {
    navigate(`/product/${props.id}`);
  };
  const navigate=useNavigate();
  return (
    <>
    <div className="product-card"  >
    <AiOutlineHeart onClick={()=>addToWishlist(props.data1)}/>
        <div className="thumbnail" onClick={handleClick}>
           <img src={process.env.REACT_APP_DEV_URL+props.data.img.data[0].attributes.url} alt="" />
        </div>
        <div className="product-details">
            <span className="name">{props.data.title} </span>
            <span className="price">₹{props.data.price}</span>
        </div>
    </div>
    </>
  )
}

export default Products