// import { DisabledContextProvider } from "antd/es/config-provider/DisabledContext";
import React from "react";
// import { Styled } from "react";
import Cardfirst from "./component/Cardfirst";
import Horizon from "./component/Horizon";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
// import {  lastcard } from "./Utility/alldata";
import RatingLike from "./component1/RatingLike";
import Cardforth from "./component/Cardforth";
// import { useEffect, useState } from "react";

function Page1() {
  // const [user,setUser]=useState([]);
  //   const API="http://localhost:7000/";
  //  const fetchData= async(url)=> {
  //    try {
  //      const response = await fetch(url);
  //      const data=await response.json();
  //      if(data.lenght>0){
  //        setUser(data);
  //      }
  //      console.log(data);

  //    } catch (error) {
  //      console.error(error);
  //    }
  //  }

  //  useEffect(() => {
  //    fetchData(API);
  //  },[])

  return (
    <div>
      <div className="App">
        <div>
          <Navbar title="My-Show" />
        </div>
        <div className="coursor">
          <Slider />
        </div>
        <div className="card-1-name">
          <strong> Recommanded Movies </strong>
        </div>

        <div className="card-first">
          {/* {Carddata.map((item, i1) => (
            <div className="Compofcard-small">
              <Cardfirst data={item} />
            </div>
          ))}
          <div></div> */}
          <Cardfirst />
        </div>

        <div>
          <Horizon />
        </div>
        <div className="div2-parent">
          <div>
            <img
              className="div2-child-img"
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt=".."
            ></img>
          </div>
          <div className="div2-sub">
            <h2 className="div2-sub-name">
              <b>Premieres</b>
            </h2>
            <h6 className="div2-sub-name1">Brand new releases every Friday</h6>
          </div>
          <div className="card-like-container">
            {/* {user.map((item, i1) => (
              <div
                className="likecard-small"
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  display: "flex",
                  marginright: "30px",
                }}
              >
                <RatingLike data={item} />
              </div>
            ))} */}
            <RatingLike />
          </div>
        </div>
        <div className="div3-card-name">
          <h3>
            <b>The Best Of Live Events</b>
          </h3>
        </div>
        {/* <div className="div4"> */}
        <div className="color-container">
          <div className="color-container-1">
            <h4 className="color-container-1-name">
              <b>WorkShop & More</b>
            </h4>
            <p className="color-container-1-subname">
              <b>75+ Events</b>
            </p>
          </div>
          <div className="color-container-2">
            <h4 className="color-container-2-name">
              <b>Kids Zone</b>
            </h4>
            <p className="color-container-2-subname">
              <b>10+ Events</b>
            </p>
          </div>
          <div className="color-container-3">
            <h4 className="color-container-3-name">
              <b>Comedy Shows</b>
            </h4>
            <p className="color-container-3-subname">
              <b>50+ Events</b>
            </p>
          </div>
          <div className="color-container-4">
            <h4 className="color-container-4-name">
              <b>Music Show</b>
            </h4>
            <p className="color-container-4-subname">
              <b>15+ Events</b>
            </p>
          </div>
          <div className="color-container-5">
            <h4 className="color-container-5-name">
              <b>Exports Centre</b>
            </h4>
            <p className="color-container-5-subname">
              <b>4+ Events</b>
            </p>
          </div>
        </div>
        {/* </div> */}

        <div className="card-4-name">
          <strong> Online Streaming Events </strong>
        </div>

        <div className="card-forth">
          {/* {lastcard.map((item, i1) => (
          <div className="Compofcard1-small">
            <Cardforth data={item} />
          </div>
        ))}
        <div></div> */}
          <Cardforth />
        </div>
      </div>
    </div>
  );
}

export default Page1;
