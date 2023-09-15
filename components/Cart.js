'use client'

import { useState } from "react"

export default function Cart({result}){
   let [ count, setCount ] = useState(1);

   return (
      <div className="cart">
         <span className="minus" onClick={()=>{setCount(count-1)}}> - </span>
         <span className="number">{count}</span>
         <span className="plus" onClick={()=>{setCount(count+1)}}> + </span>
          
          <button className="cartBtn btnStyle2" onClick={()=>{
            fetch('/api/cart/new', {method:'POST', body: JSON.stringify({
               count: count,
               price: result.price,
               description: result.description,
               image: result.image 
            }) })
          }}> 장바구니 담기 </button>
          <button className="buy btnStyle2"> 바로 구매 </button>
      </div>

   )
}