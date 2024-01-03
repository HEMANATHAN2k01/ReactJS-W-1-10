import React, { useEffect, useState } from "react";
import Axios from "axios";

var id = 11;
export const Test2 = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) =>
      setUser(res.data)
    );
  }, []);

  const postData = () => {
    Axios.post(`https://jsonplaceholder.typicode.com/users`, {
      id: id++,
      name: name,
    }).then((res) => setUser([...user, res.data]));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.name}</td>
                {/* <td>{e.id}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={postData}>Post</button>
      </div>
    </div>
  );
};
