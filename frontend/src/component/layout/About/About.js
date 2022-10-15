import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import {YouTube} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";

export const About = () => {

  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/lalit-kumawat-323700221";
  };
  return (

    <div className="aboutSection">
    <div></div>
    <div className="aboutSectionGradient"></div>
    <div className="aboutSectionContainer">
      <Typography component="h1">About Us</Typography>

      <div>
        <div>
          <Avatar
            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGdJnNYjiZimQ/profile-displayphoto-shrink_400_400/0/1653403777640?e=1671062400&v=beta&t=O5pyNqEaum1zcWUK0gc6rxwR6ZO9en4wf-2aDcxBzgo"
            alt="Founder"
          />
          <Typography>Lalit Kumawat</Typography>
          <Button onClick={visitLinkedIn} color="primary">
           <LinkedIn/> Visit LinkedIn
          </Button>
          <span>
            This is a sample wesbite made by Lait Kumawat. Only with the
            purpose to learn MERN Stack.
          </span>
        </div>
        <div className="aboutSectionContainer2">
          <Typography component="h2">Our Brands</Typography>
          <a
            href="https://www.youtube.com/channel/UC0Y1WgJK08W2dGpa5RH_vJg"
            target="blank"
          >
            <YouTube className="youtubeSvgIcon" />
          </a>


          <a href="https://www.linkedin.com/in/lalit-kumawat-323700221" target="blank">
            <LinkedIn className="linkedinSvgIcon" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
