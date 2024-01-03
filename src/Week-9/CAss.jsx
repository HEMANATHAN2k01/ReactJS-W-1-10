// import "./App.css";

import apple from "./images/1Apple.png";
import orange from "./images/orange.jpg";
import beans from "./images/beans.jpg";
import cabbage from "./images/cabbage.jpg";
import { useState, useEffect } from "react";

import axios from "axios";

export default function CAss_9_1() {
  let photos = [apple, orange, beans, cabbage];
  let products = [
    { Name: "Apples", Cost: 10, Instock: 10 },
    { Name: "Oranges", Cost: 10, Instock: 10 },
    { Name: "Beans", Cost: 10, Instock: 10 },
    { Name: "Cabbage", Cost: 10, Instock: 10 }
  ];

  let [item, setItem] = useState(products);
  let [cart, setCart] = useState([]);
  let [cost, setCost] = useState(0);
  let [data, setData] = useState();

  const [name,setName]=useState();
  const [cot,setCot]=useState();
  const [inst,setInst]=useState();
  // const [urll,setUrll]=useState();

  const [del,setDel]=useState();
  const [upd,setUpd]=useState();

  const [upname,setUpname]=useState();
  const [upcost,setUpcost]=useState();
  const [upinst,setUpinst]=useState();
  // const [updimg,setUpdimg]=useState();


  let url = "http://localhost:1337/api/carts";
  function addCart(item) {
    setCart([...cart, item]);
    let c = Number(item.Cost);
    setCost(cost + c);
    console.log(cart);
  }

  let list = item.map((item, key) => (
    <div onClick={() => addCart(item)}>
     <img src={photos[key % 4]} height="50px" width="50px" alt="cart" />{" "}
      <button>{item.Name} Instock : {item.Instock} : Price :{item.Cost}</button>
      <button onClick={() => addCart(item)}>Submit</button>
      
    </div>
    
  ));
  
  useEffect(() => {
    async function fetchdata() {
      let res = await axios(url);
      let result = res.data;
      setData(result);
    }
    fetchdata();
  },[]);

  const restockproducts = (data) => {
    let newItems = data.data.map((item) => {
      let Id=item.id;
      
      // console.log(item.id);
      let { Name, Country, Cost, Instock,Img} = item.attributes;
      console.log(Img);
      return { Name, Country, Cost, Instock,Id,Img};
    });
    setItem([...item, ...newItems]);
  
  };

  async function pushdata(e){
    console.log("hi");
    e.preventDefault();
          await axios.post('http://localhost:1337/api/carts/',
           {"data":{"Name":name,"Cost":cot,"Instock":inst,"Country":"us"}}, {
            headers: {
              'content-type': 'application/json',
              'Authorization': 'Bearer '
            }
          })
  }

   function deleteData(e){
    e.preventDefault();
    axios.delete(`http://localhost:1337/api/carts/${del}`)
  
  }

  function putData(e){
    e.preventDefault();
     axios.put(`http://localhost:1337/api/carts/${upd}`,
           {"data":{"Name":upname,"Cost":upcost,"Instock":upinst,"Country":"us"}}, {
            headers: {
              'content-type': 'application/json',
              'Authorization': 'Bearer '
            }
          })
  }
  return (
    <>
      <h1>Product List</h1>
      <ul>{list}</ul>
      <h1>Cart Items </h1>
      <ul>
        {cart.map((item, k) => (<> 
          {/* <img src={item.Img} /> */}
           {item.Name} : cost {item.Cost}<br />
          </>
        ))}
      </ul>
      <h1>Total Cost </h1>
      <button>Total Cost ${cost}</button>
      <h1>Restock Items</h1>
      <form
        onSubmit={(e) => {
          restockproducts(data);
          e.preventDefault();
        }}
      >
        <input type="text" value={url} />
        <button>Submit</button>
      </form>
      <form onSubmit={e=>pushdata(e)}>
        <h1>Push a data</h1>
        <input placeholder="Name" type="text" onChange={e=>setName(e.target.value)} />
        <input  type="number" onChange={e=>setCot(e.target.value)} />
        <input  type="number" onChange={e=>setInst(e.target.value)} />
        {/* <input  type="text" onChange={e=>setUrll(e.target.value)} /> */}
       <input type="submit" />
      </form>

      <form onSubmit={e=>deleteData(e)}>
        <h1>Delete Data</h1>
        <input type="number" onChange={e=>setDel(e.target.value)} />
        <input type="submit" />
      </form>

       <form onSubmit={e=>putData(e)}>
        <h1>Update Data</h1>
        <lable>Id:</lable><input type="number" onChange={e=>setUpd(e.target.value)} />
        <input placeholder="Name" type="text" onChange={e=>setUpname(e.target.value)} />
        <input  type="number" placeholder="Instock" onChange={e=>setUpinst(e.target.value)} />
        <input  type="number" placeholder="Cost" onChange={e=>setUpcost(e.target.value)} />
        {/* <input  type="text" onChange={e=>setUpdimg(e.target.value)} /> */}
        <input type="submit" />
      </form>
      {/* <img src="https://i.ibb.co/MPKhcMG/apple.jpg" alt="apple" border="0"/> */}
    </>
  );
}