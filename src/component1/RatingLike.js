import React from 'react'
import { Card } from "antd";
const { Meta } = Card;
function RatingLike(props) {
  return (
    <div>
         <Card
        className="parentlike"
        hoverable
        style={{
          width: 200,
          height: "300px",
        }}
        cover={<img className="childlike" alt="example" src={props.data.addimg} />}
      >
        <Meta title={props.data.movname}  />
      </Card>
    </div>
  )
}

export default RatingLike