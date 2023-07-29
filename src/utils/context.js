import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setcartItems] = useState([]);
  const [wishlist, setwishlist] = useState([]);
  const [Count, setCount] = useState(0);
  const [cartSubTotal, setcartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])


  useEffect(() => {
    let count=0;
    cartItems.map((item)=>(count+=item.attributes.quantity));
    setCount(count);
     console.log("hello"+Count)


    let total=0
    cartItems.map((item)=>total+=item.attributes.price*item.attributes.quantity);
    setcartSubTotal(total)
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
        items[index].attributes.quantity += quantity;
    } else {
        product.attributes.quantity = quantity;
        items = [...items, product];
    }
    setcartItems(items);
};

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setcartItems(items);
  };


  const handleCartProductQuantityItem = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if(type==='inc')
    {
      items[index].attributes.quantity += 1;
    }
    else if(type==='dec')
    {
      if(items[index].attributes.quantity===1) return
      items[index].attributes.quantity-=1
    }
    setcartItems(items)
  };


      const addToWishlist = (product) => {
        let items = [...wishlist];
        // let index = items?.findIndex((p) => p.id === product?.id);
        items=[...items, product]
        setwishlist(items);
      };

      const removeFromWishlist=(id)=>
      {
        let items=[...wishlist]
        items = items.filter((p) => p?.id !== id);
        setwishlist(items)
      }


  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setproducts,
        isLoading,
        setIsLoading,
        cartItems,
        setcartItems,
        Count,
        setCount,
        cartSubTotal,
        setcartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantityItem,
        wishlist, 
        setwishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
