import React from "react";
import { Card } from "antd";
function Rate(props) {
  return (
    <div>
      <Card
        className="parentlike"
        hoverable
        style={{
          width: 200,
          height: 200,
          
        }}
        cover={
          <img className="childlike" alt="example" src={props.data.addimg} />
        }
      >
        <div style={{ color: "black" }}>
          <h6>{props.data.movname}</h6>
        </div>
        {/* <Meta title={props.data.movname}  /> */}
      </Card>
    </div>
  );
}

export default Rate;
