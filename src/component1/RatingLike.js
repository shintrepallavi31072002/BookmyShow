import React from "react";
import { Card } from "antd";
import { useEffect, useState } from "react";
// const { Meta } = Card;
function RatingLike(props) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:7000/")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((userData, index) => (
          <div>
            <Card
              className="parentlike"
              hoverable
              style={{
                width: 200,
                height: 200,
                marginLeft: 30,
                marginRight: 30,
              }}
              cover={
                <img
                  className="childlike"
                  alt="example"
                  src={userData.addimg}
                />
              }
            >
              <div style={{ color: "white" }}>
                <h6>{userData.movname}</h6>
              </div>
            </Card>
          </div>
        ))}
    </>
  );
}

export default RatingLike;
