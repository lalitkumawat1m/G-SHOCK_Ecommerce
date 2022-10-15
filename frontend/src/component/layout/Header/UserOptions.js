import React, { Fragment, useState } from 'react'
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { useParams } from 'react-router-dom';
import {Backdrop} from "@mui/material";
import {Dashboard} from "@mui/icons-material";
import {Person} from "@mui/icons-material";
import {ExitToApp} from "@mui/icons-material";
import {ListAlt} from "@mui/icons-material";
import {ShoppingCart} from "@mui/icons-material";
import {  useNavigate} from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";


export const UserOptions = ({}) => {

   const navigate =  useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {user}=useSelector((state)=>state.user);
  const { cartItems } = useSelector((state) => state.cart);

   const [open, setOpen] = useState(false);



   const options = [
    { icon: <ListAlt />, name: "Orders", func: orders },
    { icon: <Person />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCart
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToApp />, name: "Logout", func: logoutUser },
  ];


 if (user.role === "admin") {
    options.unshift({
      icon: <Dashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/admin/dashboard");
  }

  function orders() {
    navigate("/orders");
  }
  function account() {
    navigate("/account");
  }
  function cart() {
    navigate("/cart");
  }
  function logoutUser() {
   
    dispatch(logout());
    alert.success("Logout Successfully");
    
  }


  return (



    <Fragment>
        <Backdrop open={open} style={{ zIndex: "10" }} />
        <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
            <img
              className="speedDialIcon"
              src={user.avatar.url ? user.avatar.url : "/Profile.png"}
              alt="Profile"
            />
          }
        >
            {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      
        </SpeedDial>
        
        
        
    </Fragment>



  )
}
