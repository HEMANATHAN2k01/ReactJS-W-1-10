import React, { useState } from "react";

export const Test_1 = () => {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTemp(name);
    setName('')
  };

  return (
    <div>
      {temp === "" ? <h1>Data loading or Network error</h1> : <h1>Name : {temp}</h1>}

      <form onSubmit={handleChange}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
    </div>
  );
};
