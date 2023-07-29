import "./Header.scss";
import { React, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";

import Search from "./Search/Search.jsx";
import Cart from "../Cart/Cart.jsx"; 

import { useElements } from "@stripe/react-stripe-js";
import { Context } from "../../utils/context";

const Header = () => {
  const navigate=useNavigate();
   const{Count,wishlist}=useContext(Context)
  const [scrolled, setscrolled] = useState(false);
  const [showcart, setshowcart] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  // console.log("items"+Count);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };

  const togglecart=()=>
  {
    setshowcart(!showcart)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : " "}`}>
        <div className="header-content">
          <ul className="left">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/allproducts">Products</Link></li>
          </ul>
          <div className="center" onClick={()=>navigate('/')}>Trendz..</div>
          <div className="right">
            <TbSearch onClick={()=>setshowSearch(!showSearch)}/>
            {wishlist.length<1 && <AiOutlineHeart onClick={()=>navigate('/wishlist')}/>}
            {wishlist.length>0 && <AiFillHeart onClick={()=>navigate('/wishlist')}/>}
            <span className="cart-icon" onClick={togglecart}>
              <CgShoppingCart  />
               {Count>0 && <span>{Count}</span>}
            </span>
          </div>
        </div>
      </header>
      { showcart && <Cart setshowcart={setshowcart}/>}
      { showSearch && <Search setshowSearch={setshowSearch}/>}
    </>
  );
};

export default Header;
