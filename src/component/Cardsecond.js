import React from 'react'
import { Card } from "antd";
import { data2 } from '../Utility/data2';
function Cardsecond() {
    const dataCard = data2.map((props) => {
        return (
            <div>
                <Card 
                 hoverable
                 style={{
                 width: 200,
                 height :200,
                 marginLeft: "20px",
                 marginRight:"20px",
                 
                 }}
                   key={props.key}
                   cover={<img alt="exp" src={props.imgadd}/>}
                >

                </Card>
            </div>
        )
    })
  return (
    <div style={{display : "flex"}}>
     {dataCard}
    </div>
  )
}

export default Cardsecond