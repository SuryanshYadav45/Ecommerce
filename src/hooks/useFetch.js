import { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api';


export function useFetch(url) {
    const [data, setData] = useState([]);
    const [productdata, setproductData] = useState([]);
  useEffect(()=>{
    try{
        makeapicall()
    }
    catch(e)
    {
        console.log(e);
    }
   
  },[url])
  const makeapicall=async()=>
  {
    const res= await fetchDataFromApi(url);
    // console.log(res)
    setData(res)
    setproductData(res)
  }
  return {data,productdata};
  }