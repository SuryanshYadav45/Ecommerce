
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import TotalProduct from "./components/Products/TotalProduct/TotalProduct.jsx"
import AppContext from "./utils/context"
import Success from './components/Successpage/Success';
import About from "./components/About/About"
import Wishlist from './components/Wishlist/Wishlist';

const App = () => {
  return (
    <div>
        <Router>
            <AppContext>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/allproducts" element={<TotalProduct/>}/>
                  <Route path="/category/:id" element={<Category/>}/>
                  <Route path="/product/:id" element={<SingleProduct/>}/>
                  <Route path="/success" element={<Success/>}/>
                  <Route path="/wishlist" element={<Wishlist/>}/>
              </Routes>
              <Newsletter/>
              <Footer/>
            </AppContext>
        </Router>
    </div>
  )
}

export default App




