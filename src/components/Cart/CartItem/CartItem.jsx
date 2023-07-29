import "./CartItem.scss";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-5.webp";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const {cartItems,handleRemoveFromCart,handleCartProductQuantityItem}=useContext(Context)
  return (
    <div className="cart-products">
      {cartItems.map((item)=>(
        <div key={item.id} className="cart-product">
        <div className="img-container">
          <img src={process.env.REACT_APP_DEV_URL +
                item?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
        </div>
        <div className="proddetails">
          <span className="prodname">
            {item.attributes.title}
          </span>
          <MdClose className="close-btn"  onClick={()=>
          {
            handleRemoveFromCart(item)
          }}/>
          <div className="quantity-buttons">
            <span onClick={()=>handleCartProductQuantityItem('dec',item)}>-</span>
            <span>{item.attributes.quantity}</span>
            <span onClick={()=>handleCartProductQuantityItem('inc',item)}>+</span>
          </div>
          <div className="text">
            <span>{item.attributes.quantity}</span>
            <span>X</span>
            <span className="highlight">₹{item.attributes.price*item.attributes.quantity}</span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CartItem;
