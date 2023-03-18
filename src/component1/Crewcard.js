import React from "react";
import { Card } from "antd";
const { Meta } = Card;
function Crewcard(props) {
  return (
    <div>
      <Card
        
        style={{ width: 140 ,height: "0px" ,border:"none"}}
        cover={
          <img
            alt="example"
            src={props.data.imgadd}
            style={{ borderRadius: "50%" }}
          />
        }
      >
        <Meta title={props.data.actName} description={props.data.profile} />
      </Card>
    </div>
  );
}

export default Crewcard;
