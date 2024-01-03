import axios from "axios";
import React, { useEffect, useState } from "react";

export const AxiosGet = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorVal, setErrorVal] = useState("");

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(response.data);
    } catch (error) {
      setData([]);
      setErrorVal(error.message);
    }
  };

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        { name: name, email: email }
      );
      console.log(response.data);
      setData([...data,response.data]);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="justify-center item">
        <div>
          {data.length > 0
            ? data.map((e, index) => (
                <div key={index}>
                  <p>{e.name}</p>
                </div>
              ))
            : errorVal}
        </div>
        <div>
          <form onSubmit={PostData}>
            <input
              type="text"
              placeholder="Name"
              className=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className=""
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
