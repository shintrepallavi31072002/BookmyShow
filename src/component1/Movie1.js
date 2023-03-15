import { Card } from "antd";
import React from "react";
const { Meta } = Card;

// import { Button, Space } from 'antd';
// import TopDiv from "./TopDiv";

function Movie1() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        hoverable
        style={{
          backgroundColor:"black",
          width: 240,
          height: "410px",
          marginLeft: "120px",
          
        }}
        cover={
          <img
            alt="example"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tu-jhoothi-main-makkaar-et00347237-1675065103.jpg"
          />
        }
      >
        <Meta title="incinemas" style={{ alignItems: "center",color:"white"}} />
      </Card>
      <div
        style={{width: 600,
          paddingLeft:"30px",
          // display:"flex"
        }}>
          <div style={{paddingBottom:"5px"}}>
        <h1><b>Tu Jhoothi Main Makkaar</b> </h1><br/>
        </div>
        <div style={{paddingBottom:"5px"}}>
          <h3>7.9/10 46kvotes</h3>
          {/* <svg width="100%" height="100%">
            <use href="https://image.shutterstock.com/image-vector/star-red-flat-icon-vector-260nw-323920799.jpg"></use>
          </svg> */}
        </div><br/>
        
        <div style={{backgroundColor:"grey",height:"100px",borderRadius:"10px",paddingBottom:"20px"}}>
          <div style={{paddingTop:"15px",paddingLeft:"40px"}}>
        <h4><b>Add Your Ratings & Review</b></h4>
        </div>
        <div style={{paddingLeft:"40px"}}>
           <h5>Your Rating Matters</h5>
           
        </div>
        
        {/* <button style={{backgroundColor:"grey"}}>Submit</button> */}
        </div><br></br>
        <div style={{paddingBottom:"25px"}}>
        <button type="button" style={{marginRight:"10px"}} class="btn btn-light">2D</button>
        <button type="button" class="btn btn-light">Hindi</button>
        </div>
        <div >
          <h5>2h 39m . Comedy, Romantic . UA . 8 Mar, 2023</h5>
        </div>
        <div style={{paddingTop:"20px"}}>
        <button type="button" class="btn btn-danger btn-lg">Large button</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Movie1;
