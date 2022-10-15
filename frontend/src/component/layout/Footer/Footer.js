import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import logo from "../../../images/logo2.PNG";
import {YouTube} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Facebook} from "@mui/icons-material";
import {Instagram} from "@mui/icons-material";
import {Twitter} from "@mui/icons-material";
import {Discount} from "@mui/icons-material";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        {/* <h1>G-SHOCK</h1> */}
        <img src={logo} alt="Gshock" />
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Lalit Kumawat</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us </h4>
        <a href="https://www.instagram.com/mr_lalit47/"><Instagram /></a>
        
        <a href="https://www.youtube.com/channel/UC0Y1WgJK08W2dGpa5RH_vJg"><YouTube  />
         </a>
        
        <a href="https://www.facebook.com/techkinglalit/videos/?ref=page_internal"><Facebook /></a>
        
        <a href="https://www.linkedin.com/in/lalit-kumawat-323700221"><LinkedIn/></a>
        
        
        <a href="https://twitter.com/lalitkumawat1m"><Twitter /></a>
      
      </div>

    </footer>
  )
}

