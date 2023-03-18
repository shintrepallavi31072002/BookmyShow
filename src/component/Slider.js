import React from "react";
import { Carousel } from "antd";
//import { Css } from './component/Css'

const contentStyle = {
 
  height: "100%",
  width: "100%",
  color: "white",
  lineHeight: "150px",
  textAlign: "center",
 
  paddingtop:"90px",
  
 
  
  
  // bg:"black"
};
const Slider = () => (
  <Carousel autoplay>
    <div style={{display: "flex"}}>
      <div style={contentStyle }>
        <img
        
        width="100%"
          height="400px"
          style={{ borderRadius: "10px" }}
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1675080138999_web.jpg"
          alt="..."
        />
      </div>
      </div>
      <div style={{display: "flex"}}>
      <div style={contentStyle}>
        <img
          width="100%"
          height="400px"
          style={{ borderRadius: "10px" }}
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1678279334271_stanblrweb.jpg"
          alt="..."
          
        />
      </div>
      </div>
      <div style={{display: "flex"}}>
      <div style={contentStyle}>
        <img
          width="100%"
          height="400px"
          style={{ borderRadius: "10px" }}
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1677586185987_korolovaweb.jpeg"
          alt="..."
        />
      </div>
      </div>
      <div style={{display: "flex"}}>
      <div style={contentStyle}>
        <img
          width="100%"
          height="400px"
          style={{ borderRadius: "10px" }}
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1677826327543_geetohweb.jpg
             "
          alt="..."
        />
      </div>
      </div>
  </Carousel>
);

export default Slider;
