// import { DisabledContextProvider } from "antd/es/config-provider/DisabledContext";
import React from "react";
// import { Styled } from "react";
import Cardfirst from "./component/Cardfirst";
import Horizon from "./component/Horizon";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import { Carddata } from "./Utility/alldata";
import RatingLike from "./component1/RatingLike";
// import { useEffect,useState } from "react";
// import axios from "axios";

function Page1() {
  // const [matches, setMatches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // )

  // useEffect(() => {
  //   window.matchMedia("(min-width: 768px)")
  //   .addEventListener('change', e => setMatches( e.matches ));
  // }, []);

  //   const [user,setUser]=useState([]);
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
// const StyleRegisterContainer = Styled.div`
//     width:"100%"; 
//     @media (min-width:0px) and (max-width:"100%"){
//       width:"50%";
//     }
// `;
  return (
    <div>
      <div className="App">
        <div className="nav-class">
          <Navbar title="My-Show" />
        </div>
        <div className="coursor">
          <Slider style={{ display: "flex" }} />
        </div>
        <div>
          <h2 style={{ marginLeft: "140px" }}>
            <strong> Recommanded Movies </strong>
          </h2>
        </div>
        {/* <button onClick={()=>navigate('Page2')}> */}
        <div className="card-first" style={{ display: "flex" }}>
          {Carddata.map((item, i1) => (
            <div
              className="Compofcard-small"
              style={{
                marginLeft: "40px",
                display: "flex",
                marginright: "30px",
              }}
            >
              <Cardfirst data={item} />
            </div>
          ))}
          <div></div>
        </div>
        {/* </button> */}
        <div className="hori-card">
          <Horizon />
        </div>
        <div className="div-parent">
          <div className="div-child">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt=".."
              style={{ width: "850px", marginLeft: "120px", padding: "30px" }}
            ></img>
          </div>
          <div style={{ color: "white", marginLeft: "150px" }}>
            <h2>
              <b>Premieres</b>
            </h2>
            <h6>Brand new releases every Friday</h6>
          </div>
          <div
            className="card-like-container"
            style={{
              display: "flex",
              marginLeft: "120px",
              paddingTop: "20px",
              marginBottom: "10px",
            }}
          >
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
        <div style={{ marginTop: "40px", paddingLeft: "140px" }}>
          <h3>
            <b>The Best Of Live Events</b>
          </h3>
        </div>
        <div
          className="color-container"
          style={{
            paddingLeft: "145px",
            paddingTop: "10px",
            display: "flex",
            paddingBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(red,magenta)",
              width: "220px",
              height: "180px",
              color: "whitesmoke",
              borderRadius: "13px",
            }}
          >
            <h4 style={{ paddingLeft: "20px", paddingTop: "50px" }}>
              <b>WorkShop & More</b>
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              <b>75+ Events</b>
            </p>
          </div>
          <div
            style={{
              backgroundImage: "linear-gradient(pink,blue)",
              width: "220px",
              height: "180px",
              marginLeft: "40px",
              color: "whitesmoke",
              borderRadius: "13px",
            }}
          >
            <h4 style={{ paddingLeft: "20px", paddingTop: "50px" }}>
              <b>Kids Zone</b>
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              <b>10+ Events</b>
            </p>
          </div>
          <div
            style={{
              backgroundImage: "linear-gradient(green,yellow)",
              width: "220px",
              height: "180px",
              color: "whitesmoke",
              marginLeft: "40px",
              borderRadius: "13px",
            }}
          >
            <h4 style={{ paddingLeft: "20px", paddingTop: "50px" }}>
              <b>Comedy Shows</b>
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              <b>50+ Events</b>
            </p>
          </div>
          <div
            style={{
              backgroundImage: "linear-gradient(skyblue,purple)",
              width: "220px",
              height: "180px",
              color: "whitesmoke",
              marginLeft: "40px",
              borderRadius: "13px",
            }}
          >
            <h4 style={{ paddingLeft: "20px", paddingTop: "50px" }}>
              <b>Music Show</b>
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              <b>15+ Events</b>
            </p>
          </div>
          <div
            style={{
              backgroundImage: "linear-gradient(purple,fuchsia)",
              width: "220px",
              height: "180px",
              color: "whitesmoke",
              marginLeft: "40px",
              borderRadius: "13px",
            }}
          >
            <h4 style={{ paddingLeft: "20px", paddingTop: "50px" }}>
              <b>Exports Centre</b>
            </h4>
            <p style={{ paddingLeft: "20px" }}>
              <b>4+ Events</b>
            </p>
          </div>
        </div>
        {/* <div className="card-second">
          <p>
            <h2 style={{ marginLeft: "20px" }}>The Best Of Live Events </h2>
          </p>
          <Cardsecond />
        </div> */}
        {/* <div>
           </div> */}

        <div></div>
      </div>
    </div>
  );
}

export default Page1;
