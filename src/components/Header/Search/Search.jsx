import "./Search.scss";
import React,{useState} from "react";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-4.webp";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";


const Search = (props) => {
  const navigate=useNavigate();
  const [search, setsearch] = useState("")

  const searching=(e)=>{
    setsearch(e.target.value)
  }
   let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${search}`)

   if(!search.length)
   {
    data=null;
   }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Product" value={search} onChange={searching} />
        <MdClose onClick={() => props.setshowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
        { data?.data?.map((items)=>(
          <div key={items.id} className="search-result-items" onClick={()=>{
            navigate("/product/"+items.id)
            props.setshowSearch(false)
          }}>
            <div className="img-container">
              <img src={process.env.REACT_APP_DEV_URL+items?.attributes?.img?.data?.[0]?.attributes?.url} alt="" />
            </div>
            <div className="proddetails">
              <span className="prodname">
              {items.attributes.title}
              </span>
              <span className="proddesc">
              {items.attributes.desc}
              </span>
              
            </div>
          </div>
        )) }
          
        </div>
      </div>
    </div>
  );
};

export default Search;
