import React from "react";
import Cardfirst from "./component/Cardfirst";
import Cardsecond from "./component/Cardsecond";
import Cardthird from "./component/Cardthird";
import Horizon from "./component/Horizon";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import { Carddata } from "./Utility/alldata";
// import "./CSS/card.css"
//import "./component/CSS/card.css";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate()



function Page1() {
  // const navigate = useNavigate()
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

        <div className="card-second">
          <p>
            <h2 style={{ marginLeft: "20px" }}>The Best Of Live Events </h2>
          </p>
          <Cardsecond />
        </div>
        <div className="card-third">
          <Cardthird />
        </div>
      </div>
    </div>
  );
}

export default Page1;
