import "./Home.scss";
import React ,{useEffect,useContext}from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Product from "../Products/Product/Product";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useFetch } from "../../hooks/useFetch";


const Home = () => {
const {categories, setcategories,products, setproducts}=useContext(Context);

// const{data}=useFetch("/api/categories?populate=*")
// const{productdata }=useFetch("/api/products?populate=*")

// setcategories(data);
// setproducts(productdata);


// console.log(products);
  useEffect(()=>
  {
    getCategories();
    getProducts();
  },[])

  const getCategories=()=>
  {
    fetchDataFromApi("/api/categories?populate=*").then((res)=>
    {
      console.log(res);
      setcategories(res);
    })
    
    // setcategories(data);
    
  }
  const getProducts=()=>
  {
    fetchDataFromApi("/api/products?populate=*").then((res)=>
    {
      console.log(res);
      setproducts(res);
    })
  }

  
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Product products={products} innerpage={true} text="popular products"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
