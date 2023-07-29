import React, { useContext } from "react";
import { Context } from "../../utils/context";
import { MdClose } from "react-icons/md";
import "./Wishlist.scss";
import { useNavigate } from "react-router-dom";
import {IoHeartDislikeOutline } from "react-icons/io5";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useContext(Context);
  console.log("wishlist" + wishlist);
  return (
    <div className="wishlist-products">
      {wishlist.length < 1 && 
      <div className="emptyWishlist">
        <IoHeartDislikeOutline/>
        <h1>no item wishlisted</h1>
        <button onClick={()=>navigate('/')}>go back</button>
      </div>}
      {wishlist.length > 0 &&
        wishlist.map((item) => (
          <div key={item?.id} className="wishlist-product">
            <div
              className="img-container"
              onClick={() => navigate(`/product/${item?.id}`)}
            >
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item?.attributes?.img?.data?.[0]?.attributes?.url
                }
                alt=""
              />
            </div>
            <div className="proddetails">
              <span className="prodname">{item?.attributes?.title}</span>
              <span className="prodprice">
                ₹ <span>{item?.attributes?.price}</span>
              </span>
            </div>

            <div className="removebtn">
              <MdClose onClick={() => removeFromWishlist(item?.id)} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Wishlist;
