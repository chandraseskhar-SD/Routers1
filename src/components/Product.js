import React from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "./SearchPractise";
 
const Product = ()=>{
    return(
        <div style={{display:"flex", flexDirection:"row",justifyContent:"center", gap:"40px"}}>
            <div>

            <Link to ='/search'>search</Link>
            </div>
           <div><Link to ='/list'>List</Link></div>
           <div> <Link to ='/about'>About</Link></div>
          
            
            
            {/* <Outlet/> */}
          
        </div>
    )
}
export default Product;