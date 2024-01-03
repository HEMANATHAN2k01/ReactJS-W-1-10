import Apple from './images/1Apple.png'
import Orange from './images/orange.jpg'
import Beans from './images/beans.jpg'
import Cabbage from './images/cabbage.jpg'
import { useState } from 'react'

export default function Cart() {

    const products = [
        {name:'Apple', Cost:10, inStock:10, pic:Apple},
        {name:'Orange', Cost:10, inStock:10, pic:Orange},
        {name:'Beans', Cost:10, inStock:10, pic:Beans},
        {name:'Cabbage', Cost:10, inStock:10, pic:Cabbage}
    ]

    let list = products.map((item, index)=><div style={{width:'110%',margin:'auto'}} onClick={()=>add(item)}>
        <img alt="picy" src={item.pic} width='5%' />
        Name : {item.name} - Cost : {item.Cost} - InStock : {item.inStock}
        </div>)
        
        let [cart, setCart]=useState([])

        function add(item) {
            setCart([...cart,item])
        }

        
    return(
        <div className="">
            <div className="">
                <h2>Shopping List</h2>
                {list}
                <h2>Cart List</h2>
                {cart.map((item,index)=><p><img src={item.pic} alt='pic' width='5%'/> Name : {item.name} - Cost : {item.Cost}</p>)}
                <h2>Cost : </h2>
            </div>
        </div>
    )
}