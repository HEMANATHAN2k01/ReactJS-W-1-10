import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([])
    const [stock, setStock] = useState(
        [
            {
                name:'Oranges',inStock:5
            },
            {
                name:'Apples',inStock:4
            },
            {
                name:'Grape',inStock:2
            }
        ]
    )

    const moveToCart = (e) =>
    {
        let [name, number] = e.target.innerHTML.split(':')
    

    let newStock = stock.map((item, index)=>
    {
        if(item.name === name)
        item.inStock--
        return item
    })
    setStock(newStock)
    setCart([...cart, name])

   
    
    }

    const updateList = stock.map((item, index)=>
    
        <Button key={index} onClick={moveToCart}> {item.name}:{item.inStock}  </Button>
    )

    const updatecart = cart.map((item, index)=>
    
        <Button key={index}>{item}</Button>
    )
    return(
        <div>
            <ul>{updateList}</ul>
            <h1>Shopping Cart</h1>
            <ul>{updatecart}</ul>
        </div>
    )
}