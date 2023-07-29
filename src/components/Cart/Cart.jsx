import "./Cart.scss";
import React, { useContext } from 'react'
import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "../Cart/CartItem/CartItem"
import { Context } from "../../utils/context";
import {makePaymentRequest} from "../../utils/api"
import { useNavigate } from "react-router-dom";


const Cart = (props) => {
    const navigate=useNavigate()
    const{cartSubTotal,cartItems,setcartItems}=useContext(Context)
    

    const handlePayment =()=>{
        // alert("order placed")
        setcartItems([])
        navigate('/success')
        props.setshowcart(false)
    }
  return (
    <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>props.setshowcart(false)}>
                    <MdClose/>
                    
                </span>
            </div>{!cartItems.length && <div className="empty-cart">
                <BsCartX/>
                <span>No products in the cart</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div>}
            {/* <div className="empty-cart">
                <BsCartX/>
                <span>No products in the cart</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div> */}

            {!!cartItems.length&& <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377;{cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>Order Now</button>
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Cart
