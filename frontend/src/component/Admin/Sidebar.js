import React from "react";
import "./sidebar.css";
import logo from "../../images/logo2.PNG";
import { Link } from "react-router-dom";
// import { TreeView, TreeItem } from "@mui/";
import {ExpandMore} from "@mui/icons-material";
import {PostAdd} from "@mui/icons-material";
import {Add} from "@mui/icons-material";
import {ImportExport} from "@mui/icons-material";
import {ListAlt} from "@mui/icons-material";
import {Dashboard }from "@mui/icons-material";
import {People} from "@mui/icons-material";
import {RateReview} from "@mui/icons-material";


export const Sidebar = () => {
  return (


    <div className="sidebar">
    <Link to="/">
      <img src={logo} alt="G-SHOCK" />
    </Link>
    <Link to="/admin/dashboard">
      <p>
        <Dashboard /> Dashboard
      </p>
    </Link>
    
          <Link to="/admin/products">
           <p>
             <PostAdd />
              All Products
           </p>
          </Link>

          <Link to="/admin/product">
             <p>
             <Add />
              Add Product
            </p>
          </Link>
        
    <Link to="/admin/orders">
      <p>
        <ListAlt />
        Orders
      </p>
    </Link>
    <Link to="/admin/users">
      <p>
        <People /> Users
      </p>
    </Link>
    <Link to="/admin/reviews">
      <p>
        <RateReview />
        Reviews
      </p>
    </Link>
  </div>  
  
  
  
    )
}
