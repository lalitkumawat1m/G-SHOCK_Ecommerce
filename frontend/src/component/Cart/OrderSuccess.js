import React from "react";
import {CheckCircle} from "@mui/icons-material";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const OrderSuccess = () => {

  return (


    <div className="orderSuccess">

    <CheckCircle style={{fill:"#78B346"}} />

    <Typography>Your Order has been Placed successfully </Typography>
    <Link to="/orders">View Orders</Link>
  </div> 
 
    )
}
