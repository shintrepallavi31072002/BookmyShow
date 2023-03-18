import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
//import {css} from "./css";

function Cardfirst(props) {
  //  const dataComp = data.map((props) => {
  return (
    <div>
      <Card
        className="parent"
        hoverable
        style={{
          width: 200,
          // height:"10px",
          marginLeft: "10px",
          height: 300,
        }}
        cover={
          <Link to="/Page2" rel="noreferrer">
            {" "}
            <img
              style={{ width: "200px" }}
              className="child"
              alt="example"
              src={props.data.imgurl}
            />
          </Link>
        }
      >
        <Meta title={props.data.title} description={props.data.subtitle} />
      </Card>
    </div>
  );
}
export default Cardfirst;
