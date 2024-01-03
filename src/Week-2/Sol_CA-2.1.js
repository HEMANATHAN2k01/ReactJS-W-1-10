import { useState } from "react";
export default function Sol() {
  const [state, setState] = useState({
    initialized: false,
    productName: null,
    productDescription: null,
    productPrice: null
  });


  let initializeState = () => {
    setState({
      initialized: true,
      productName: "Rice Krispies",
      productDescription: "a cereal made of popped rice",
      productPrice: "$3.00"
    })

    return state;
  };
   
  const { initialized } = state;
 
    const str = `The product name is ${state.productName},product description is ${state.productDescription}, and product price is ${state.productPrice}`;

  if (state.initialized) {
    return <h1>{str}</h1>;  } else {
    return (
      <>
        <button onClick={() => initializeState()}>
          Click here to initialize your state{" "}
        </button>
      </>
    );
  }
}