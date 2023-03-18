import React from "react";
import Movie1 from "./component1/Movie1";
import Navbar from "./component/Navbar";
import Castcard from "./component1/Castcard";
import { crewCard, profilePhoto, likecard } from "./Utility/alldata";
import Crewcard from "./component1/Crewcard";
// import RatingCard from "./component1/RatingCard";
// import RatingLike from "./component1/RatingLike";
import Rate from "./component1/Rate";
function Page2() {
  return (
    // <div style={{margin:"70px"}}>
    <div>
      <div className="nav-class">
        <Navbar title="My-Show" />
      </div>
      <div
        className="movie-parent-container"
        style={{
          height: "500px",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right, black,#4880EC, #019CAD,#019CAD,black)",
          marginTop: "2-px",
          zIndex: "2px",
        }}
      >
        <div style={{ paddingTop: "45px", zIndex: "1000px" }}>
          <Movie1 />
        </div>
      </div>
      <div style={{ marginLeft: "150px", marginTop: "50px" }}>
        <div className="about-container">
          <div>
            <h4>
              <strong>About the movie</strong>
            </h4>
          </div>
          <div>
            <h6
              style={{
                //paddingLeft: "70px",
                paddingBottom: "20px",
                position: "relative",
                display: "flex",
                flexdirection: "row",

                marginLeft: "0px",

                width: "800px",
                color: "grey",
                textRendering: "optimizeLegibility",
              }}
            >
              Madness ensues when a `player` in the world of romantic
              relationships finds a girl who`s a worthy opponent. Tu Jhoothi
              Main Makkaar is a film that believes love is a battle of wits.
            </h6>
          </div>
        </div>
      </div>
      <p style={{ border: "2px" }}></p>
      <div style={{ paddingLeft: "150px" }}>
        <div>
          <h4 style={{ paddingBottom: "20px" }}>
            {" "}
            <strong>Applicable Offers</strong>
          </h4>
        </div>
        <div
          style={{
            // marginLeft: "150px",
            paddingBottom: "60px",
            color: "#333",
            display: "flex",
            height: "90px",
            width: "500px",
            backgroundColor: "rgb(255,241,204)",
            borderRadius: "10px",
            textRendering: "optimizeLegibility",
            borderStyle: "dashed",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                alignItems: "center",
                paddingLeft: "70px",
                paddingTop: "30px",
                paddingBottom: "0px",
              }}
            >
              <p>
                <h6>WATCH MOVIE ONLINE AT FREE..!!</h6>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "150px" }}>
        <h4
          style={{
            // paddingLeft: "150px",
            paddingBottom: "20px",
            paddingTop: "80px",
          }}
        >
          {" "}
          <strong>Cast</strong>
        </h4>
      </div>
      <div
        style={{
          marginLeft: "120px",
          paddingBottom: "20px",
          height: "196px",
          width: "120px",
          display: "flex",
        }}
      >
        {profilePhoto.map((item, i1) => (
          <div
            className="Compofcard-small"
            style={{
              paddingLeft: "20px",
              // marginLeft: "18px",
              //   display:"flex",
              // marginright: "70px",
            }}
          >
            <Castcard data={item} />
          </div>
        ))}
      </div>
      <div>
        <h4
          style={{
            display: "flex",
            paddingLeft: "170px",
            paddingBottom: "0px",
            paddingTop: "90px",
            height: "150px",
            width: "120px",
          }}
        >
          {" "}
          <strong>Crew</strong>
        </h4>
      </div>
      <div
        style={{
          marginLeft: "120px",
          // marginLeft: "6px",
          // paddingTop: "2px",
          // paddingBottom: "10px",
          height: "196px",
          width: "120px",
          display: "flex",
        }}
      >
        {crewCard.map((item, i1) => (
          <div
            className="Compofcard-small"
            style={{
              //  paddingTop:'10px',
              paddingLeft: "40px",
              marginright: "30px",
            }}
          >
            <Crewcard data={item} />
          </div>
        ))}
      </div>
      {/* <div style={{paddingTop:"100px",paddingLeft:"160px"}}>
        <div>
          <h3><b>Top reviews</b></h3>
        </div>
         <RatingCard/>
      </div> */}
      <div style={{ paddingTop: "60px", paddingLeft: "160px" }}>
        <h3>
          <b>You might also like</b>
        </h3>
      </div>
      <div
        className="card-like-container"
        style={{ display: "flex", marginLeft: "140px", marginTop: "50px" }}
      >
        {likecard.map((item, i1) => (
          <div
            className="likecard-small"
            style={{
              paddingLeft: "30px",
              paddingRight: "30px",
              display: "flex",
              marginright: "30px",
            }}
          >
            <Rate data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
