import axios from "axios";
import React, { useEffect, useState } from "react";

export const Test1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/quotes`)
      .then((res) => {
        console.log(res.data.quotes);
        setData(res.data.quotes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data.map((e, index) => (
        <div key={index}>
          <p>
            {e.quote}
            <span style={{ color: "red", fontSize: "10px" }}>{e.author}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
