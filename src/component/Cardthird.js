import React from 'react'
import { Card } from "antd";
import { data3 } from '../Utility/data3';
function Cardthird() {
    const elementCard = data3.map((props) => {
        return (
            <div className="mx-2">
                <Card 
                 style={{
                 width: 300,
                 height:300
                 
                
                 }}
                   key={props.key}
                  
                >

                </Card>
            </div>
        )
    })
  return (
    <div style={{display : "flex"}}>
     {elementCard}
    </div>
  )
}

export default Cardthird