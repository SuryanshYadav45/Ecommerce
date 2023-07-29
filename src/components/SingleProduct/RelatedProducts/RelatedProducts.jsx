import React from 'react'
import Product from "../../Products/Product/Product"
import { useFetch } from '../../../hooks/useFetch'


const RelatedProducts = (props) => {
 
  const {data}=useFetch(`/api/products?populate=*&filters[categories][title]=${props.data?.title}`)
  console.log(data)
  return (
    <div className='related-products'>
        <Product innerpage={true} text="related Products" products={data}/>
    </div>
  )
}

export default RelatedProducts