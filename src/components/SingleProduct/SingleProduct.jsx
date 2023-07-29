import "./SingleProduct.scss";
import React, { useContext, useState } from "react";
import RelatedProducts from "../SingleProduct/RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/headphone-prod-1.webp";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Context } from "../../utils/context";



const SingleProduct = () => {
  const { handleAddToCart } = useContext(Context);
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  console.log(data);

  if (!data) return;

  const product = data?.data?.[0]?.attributes;
  const selectedproduct = data?.data?.[0];
  console.log("present product" + product);
  const increment = () => setquantity((prevquantity) => prevquantity + 1);
  const decrement = () =>
    setquantity((prevquantity) => {
      if (prevquantity === 1) return prevquantity;
      return prevquantity - 1;
    });

  return (
    <div className="single-page-content">
      <div className="layout">
        <div className="row single-product-page">
          <div className="col-lg-6 col-md-6 col-sm-12 left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 right">
            <h4 className="name">{product?.title}</h4>
            <span className="price">₹{product?.price}</span>
            <p className="desc">{product?.desc}</p>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setquantity(1);
                }}
              >
                <FaCartPlus size={20} /> Add to cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                category:{" "}
                <span>{product?.categories?.data?.[0]?.attributes?.title}</span>
              </span>
              <span className="text-bold">
                social:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          data={data?.data?.[0]?.attributes?.categories?.data?.[0].attributes}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
