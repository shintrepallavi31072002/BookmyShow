import React from "react";
import { Card, Col, Row } from "antd";
function RatingCard() {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Jai" bordered="100px">
            #SuperDirection #GreatActing #WowMusic #Rocking #Wellmade Watched TU
            JHOOTI MAIN MAKKAAR!!! Bollywood's vintage rom-com madness is back
            and also offers ample amount of comedy & family emotions!!! LUV
            RANJA
          </Card>
        </Col>
        <Col span={6}>
          <Card title="User" bordered={true}>
            #SuperDirection #GreatActing #WowMusic #AwesomeStory #Blockbuster
            #Wellmade A grea romantic comedy after ages! #TuJhoothiMaiMakkar is
            what Bollywood needed to bounce back in the romance era.
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Pradeep" bordered={true}>
            Tu Jhuthi Main Makkar took me back to those days where story and
            song, played parallel-ly in a movie.
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RatingCard;
