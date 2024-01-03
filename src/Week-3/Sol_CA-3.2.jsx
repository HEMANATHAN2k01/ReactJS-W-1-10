import { Button } from "react-bootstrap";
import Pic from "../images/pizza.jpeg";

export default function FoodOrder() {
  //for order confirm message
  function alert() {
    const ProName = onName();
    const ProSize = document.getElementById("size").value;
    const ProCheck = onCheck();
    const ProQuantity = document.getElementById("quantity").value;
    const ProReq = addInstruction();
    return (
      (document.getElementById(
        "print"
      ).innerHTML = `Order for ${ProQuantity} ${ProSize} pizza(s) that ${ProCheck} for ${ProName}`),
      (document.getElementById(
        "reqPrint"
      ).innerHTML = `Additional Instruction : ${ProReq}`)
    );
  }

  //for checkbox validation
  function onCheck() {
    if (
      document.getElementById("check").checked &&
      document.getElementById("check1").checked
    ) {
      return `are gluten - free and have pepperoni`;
    } else if (document.getElementById("check").checked) {
      return `are not gluten - free and have pepperoni`;
    } else if (document.getElementById("check1").checked) {
      return `are gluten - free and don't have pepperoni`;
    } else {
      return `are not gluten - free and don't have pepperoni`;
    }
  }

  //for name validation
  function onName() {
    if (document.getElementById("name").value) {
      return document.getElementById("name").value;
    } else {
      return `Anonymous`;
    }
  }

  //for Additional Instruction
  function addInstruction() {
    if (document.getElementById("req").value) {
      return document.getElementById("req").value;
    } else {
      return "None";
    }
  }
  const style = {
    border: "2px solid black",
    margin: "auto",
    width: "50%",
    padding: "0 1%",
  };
  return (
    <div>
      <div style={style}>
        <h3>Refresh here to see your changes</h3>
        <div>
          <img src={Pic} alt="Pic" />
          <div className="form">
            <h6>Build Your Pizza</h6>
            <form action="">
              <h6>
                <label htmlFor="">Name : </label>
              </h6>
              <input type="text" id="name" required />
              <br />
              <h6>
                <label htmlFor="">Size : </label>
              </h6>
              <select name="" id="size">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Ultra-larga</option>
              </select>
              <br />
              <h6>
                <label htmlFor="">Flavor : </label>
              </h6>
              <input type="checkbox" name="" id="check" />
              Pepperoni
              <br />
              <input type="checkbox" name="" id="check1" />
              Gluten Free
              <br />
              <h6>
                <label htmlFor="">Quantity : </label>
              </h6>
              <input type="number" name="" id="quantity" />
              <h6>Additional Instruction : </h6>
              <textarea
                name=""
                id="req"
                cols="50"
                rows="1"
                placeholder="Stuffed Crust, No Cheese, No Sauce, Add Mushroom"
              ></textarea>
              <br />
              <Button onClick={alert}>Submit Query</Button>
            </form>
            <div className="printArea">
              <h6>Most Recent Order : </h6>
              <p id="print"></p>
              <p id="reqPrint"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
