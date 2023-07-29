import React from 'react'
import "./Success.scss"
import {useNavigate} from "react-router-dom"
const Success = () => {
  const navigate=useNavigate();
  return (
    <div className='successdiv'>
    <h1>Congratulations</h1>
    <h4>Your order has been placed</h4>
    <button onClick={()=>navigate('/allproducts')}>Continue shopping</button>
    </div>
  )
}

export default Success