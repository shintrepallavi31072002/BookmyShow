import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
// const { Meta } = Card;
import { useEffect, useState } from "react";
function Cardfirst(props) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:7000/")
      .then((response) => response.json())
      .then((data) => setUser(data.Carddata));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((userData) => (
          <div>
            <Card
              className="parent"
              hoverable
              cover={
                <Link to="/Page2" rel="noreferrer">
                  <img className="child" alt="example" src={userData.imgurl} />
                </Link>
              }
            ></Card>
            <div className="card1-sub-title" style={{ color: "black" }}>
              <h6 className="card1-name">{userData.title}</h6>
              <h6 className="card1-subname">{userData.subtitle}</h6>
            </div>
            {/* <Meta className="card1-sub-title" title={props.data.title} description={props.data.subtitle} /> */}
          </div>
        ))}
    </>
  );
}
export default Cardfirst;
