import React from "react";
import { Card } from "antd";
import { useEffect, useState } from "react";
// const { Meta } = Card;
function RatingLike() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:7000/")
      .then((response) => response.json())
      .then((data) => setUser(data.darkblock));
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
              className="parentlike"
              hoverable
              cover={
                <img
                  className="childlike"
                  alt="example"
                  src={userData.addimg1}
                />
              }
            >
              <div>
                <h6 className="subnamelike">{userData.movname1}</h6>
              </div>
            </Card>
          </div>
        ))}
    </>
  );
}

export default RatingLike;
