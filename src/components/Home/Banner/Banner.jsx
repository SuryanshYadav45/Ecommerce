import "./Banner.scss";
import React from 'react'
import Bannerimg from "../../../assets/banner-img.png"
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate =useNavigate();
  return (
    <div className="hero-banner">
        <div className="row hero-content">
            <div className="col-lg-6 col-md-6 col-sm-12 left">
                <h1>SALES</h1>
                <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Laborum magnam ex reiciendis necessitatibus soluta optio laudantium deleniti 
                        pariatur voluptas possimus.
                </p>
                <div className="button">
                    <button className="btn1" onClick={()=>navigate("/about")}>Read more</button>
                    <button className="btn2" onClick={()=>navigate("/allproducts")}>Shop now</button>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 right">
                <img src={Bannerimg} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Banner
