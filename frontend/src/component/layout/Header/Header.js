import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo2.PNG";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";


const options = {
  profileIcon:true,
  profileIconColor: "white",
  ProfileIconElement: MdAccountCircle, 
  searchIcon:true,
  searchIconColor: "white",
  SearchIconElement:MdSearch,
  cartIcon:true,
  cartIconColor: "white",
  CartIconElement:MdAddShoppingCart,
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "black",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  link1AnimationTime:	0.5,
  link2AnimationTime:	0.6,
  link3AnimationTime:	0.7,
  link4AnimationTime:	0.8,
  logoAnimationTime: 0.4,
  searchIconAnimationTime:0.9,
  cartIconAnimationTime:1.1,
  profileIconAnimationTime:1.2
  
};


export const Header = () => {
  return <ReactNavbar {...options} />;
};

// export default Header;