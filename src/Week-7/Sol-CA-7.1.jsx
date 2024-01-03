import Book from "./books";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

export default function CA_7_1() {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("./books.json");
      const json = await response.json();
      setData(json);
      setLoad(true);
    }
    getData();
  }, []);

  console.log("loaded:", load, "data:", data);

  return (
    <>
      {" "}
      <div className="container">
        <h1>React Components</h1>
        {load && data.books.map((book, i) => <Book data={book} key={i} />)}
      </div>{" "}
    </>
  );
}
