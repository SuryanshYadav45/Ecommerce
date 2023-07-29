import "./Footer.scss";
import React from 'react'
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import Payment from "../../assets/payments.png"
import {useNavigate} from "react-router-dom"
const Footer = () => {
    const navigate =useNavigate()
   
  return (
    <footer className="footer">
        <div className="row footer-content">
            <div className="col-lg-3 col-md-6 col-sm-12 about">
                <h6>About</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sint ipsam reprehenderit magnam obcaecati, aliquam recusandae.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 contact">
                <h6>Contact</h6>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                    Trendz Pvt. Ltd. 151, Friends Colony, Katol Road, Nagpur
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                    Phone:0976-567-987
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                    Email: trendzsupport@gmail.com
                    </div>
                </div>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 categories">
                <h6>Categories</h6>
                <span className="text" onClick={()=>navigate('/category/1')}>Headphones</span>
                <span className="text" onClick={()=>navigate('/category/4')}>Smart Watches</span>
                <span className="text" onClick={()=>navigate('/category/3')}>Bluetooth Speakers</span>
                <span className="text" onClick={()=>navigate('/category/2')}>Wireless Earphone</span>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pages">
                <h6>Pages</h6>
                <span className="text" onClick={()=>navigate('/')}>Home</span>
                <span className="text" onClick={()=>navigate('/about')}>About</span>
                <span className="text" onClick={()=>navigate('/allproducts')}>Product</span>
                
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Created with ❤️ by Suryansh in India
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer
