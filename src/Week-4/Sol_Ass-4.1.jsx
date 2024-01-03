import React, { useState } from 'react';

const Ass4_1 = () => {
  const [stock, setStock] = useState({
  Jacket: { quantity: 5, price: 80 },
  Pant: { quantity: 4, price: 40 },
  Scraf: { quantity: 2, price: 20 },
  Pajamas: { quantity: 5, price: 50 },
  Shirt: { quantity: 6, price: 60 }
  });

  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    if (stock[product].quantity > 0) {
      setStock({
        ...stock,
        [product]: { ...stock[product], quantity: stock[product].quantity - 1 }
      });
      setCart({ ...cart, [product]: (cart[product] || 0) + 1 });
      setTotal(total + stock[product].price);
    }
  };
  
  const removeFromCart = (product) => {
    if (cart[product] > 0) {
      setStock({
        ...stock,
        [product]: { ...stock[product], quantity: stock[product].quantity + 1 }
      });
      setCart({ ...cart, [product]: cart[product] - 1 });
      setTotal(total - stock[product].price);
    }
  };
  
  return (
    <div style={{border:'2px solid black',width:'70%',margin:'5% auto',padding:'1.5%',background:'lightgreen'}}>
  <h4>Clothing List:</h4>
  <ul>
    {Object.keys(stock).map((product) => (
      <li key={product} style={{display:"inline-block"}}>
        <button style={{color:"red"}} className="button" onClick={() => addToCart(product)} disabled={stock[product].quantity === 0}>
          {product}: {stock[product].quantity} (${stock[product].price})
        </button>
      </li>
    ))}
  </ul>
  <h4>Shopping Cart:</h4>
  <ul>
    {Object.keys(cart).map((product) => (
      <li className="button"key={product} style={{display:"inline-block",borderStyle:"solid",borderColor: "black",color:"red"}} onClick={() => removeFromCart(product)}>
        {product}: {cart[product]} (${cart[product] * stock[product].price})
      </li>
    ))}
  </ul>
  <h4>Bill Amount: ${total}</h4>
</div>

  );
};

export default Ass4_1;
