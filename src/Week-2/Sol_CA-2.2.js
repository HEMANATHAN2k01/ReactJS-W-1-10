import { useState } from "react";

function Person() {
  const [state, setState] = useState({
    details: { name: "", residence: { city: "", country: "" }, profession: "" }
  });

  const Details = (props) => {
    // TODO: destructure props
    let newObj=props.person;
    newObj.details.name='Maradona'
    newObj.details.residence.city='Tigre'
    newObj.details.residence.country='Argentina'
    newObj.details.profession='Soccer'
    setState(newObj)
    //setState({ name: "Maradona", residence: { city: "Tigre", country: "Argentina" }, profession: "soccer" })
    return (
      
      <div style={{ margin: "1em" }}>
        <div><h1 style={{textShadow:'2px 2px 10px red,2px 2px 10px blue,2px 2px 10px aqua'}}>Form Hemanathan</h1></div>
        <div id="name">Name: {props.person.details.name}</div>
        <div id="city">City: {props.person.details.residence.city}</div>
        <div id="country">Country: {props.person.details.residence.country}</div>
        <div id="profession">Profession: {props.person.details.profession}</div>
      </div>
    );
  };

  return <Details person={state}></Details>;
}



export default Person;



