import { Card } from "antd";
import React from "react";
// const { Meta } = Card;

// import { Button, Space } from 'antd';
// import TopDiv from "./TopDiv";

function Movie1() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        hoverable
        style={{
          backgroundColor: "black",
          width: 240,
          height: "300px",
          marginLeft: "150px",
        }}
        cover={
          <img
            alt="example"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tu-jhoothi-main-makkaar-et00347237-1675065103.jpg"
          />
        }
      >
        <div style={{ color: "whitesmoke" }}>
          <h3>In Cinemas</h3>
        </div>
      </Card>
      <div
        style={{
          width: 600,
          paddingLeft: "60px",
          // display:"flex"
        }}
      >
        <div style={{ paddingBottom: "7px", color: "whitesmoke" }}>
          <h1>
            <b>Tu Jhoothi Main Makkaar</b>{" "}
          </h1>
        </div>
        <div style={{ paddingBottom: "13px", color: "whitesmoke" }}>
          <h5>7.9/10 46kvotes</h5>
          {/* <svg width="100%" height="100%">
            <use href="https://image.shutterstock.com/image-vector/star-red-flat-icon-vector-260nw-323920799.jpg"></use>
          </svg> */}
        </div>

        <div
          style={{
            color: "white",
            height: "100px",
            borderRadius: "10px",
            paddingBottom: "20px",
            paddingTop: "5px",
            backgroundImage: "linear-gradient(to right, black,red)",
          }}
        >
          <div style={{ paddingTop: "10px", paddingLeft: "40px" }}>
            <h4>
              <b>Add Your Ratings & Review</b>
            </h4>
          </div>
          <div style={{ paddingLeft: "40px" }}>
            <h5>Your Rating Matters</h5>
          </div>

          {/* <button style={{backgroundColor:"grey"}}>Submit</button> */}
        </div>
        <br></br>
        <div style={{ paddingBottom: "25px" }}>
          <button
            type="button"
            style={{ marginRight: "10px" }}
            class="btn btn-light"
          >
            2D
          </button>
          <button type="button" class="btn btn-light">
            Hindi
          </button>
        </div>
        <div style={{ color: "whitesmoke" }}>
          <h5>2h 39m . Comedy, Romantic . UA . 8 Mar, 2023</h5>
        </div>
        <div style={{ paddingTop: "20px", width: "1000px" }}>
          <button type="button" class="btn  btn-lg" style={{ backgroundImage: "linear-gradient(to bottom,yellow,orange)",color:''}}>
            <b>Book Tickets</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie1;
