import React from "react";
import { Card } from "antd";
const { Meta } = Card;
function Crewcard(props) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 150, height: "150px" }}
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
