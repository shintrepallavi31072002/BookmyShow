import React from "react";
import { Carousel } from "antd";
//import { Css } from './component/Css'

const Slider = () => (
  <Carousel autoplay>
    <div className="carousel-1">
      <div className="carousel-1-div">
        <img
          className="carousel-1-img"
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1675080138999_web.jpg"
          alt="..."
        />
      </div>
    </div>
    <div className="carousel-2">
      <div className="carousel-2-div">
        <img
          className="carousel-2-img"
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1678279334271_stanblrweb.jpg"
          alt="..."
        />
      </div>
    </div>
    <div className="carousel-3">
      <div className="carousel--3-div">
        <img
          className="carousel-3-img"
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1677586185987_korolovaweb.jpeg"
          alt="..."
        />
      </div>
    </div>
    <div className="carousel-4">
      <div className="carousel-4-div">
        <img
          className="carousel-4-img"
          src="	https://assets-in.bmscdn.com/promotions/cms/creatives/1677826327543_geetohweb.jpg
             "
          alt="..."
        />
      </div>
    </div>
  </Carousel>
);

export default Slider;
