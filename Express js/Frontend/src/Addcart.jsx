import { useState,useEffect } from "react";
import './App.css'
import axios from "axios";



function Cart() {

    let [items, setItems] = useState([]);

    useEffect(()=> {
        axios.get('/cart')
        .then((res)=>{
            setItems(res.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    },[]);

    function handlequantity(id) {
        let updatedquantity = items.map((item)=> {
            if(item.id===id) {
                return {...item, quantity:(item.quantity || 0)+1}
            }
            return item;
        })
        setItems(updatedquantity);
    }

    function decrequantity(id) {
        let updatedquantity = items.map((item)=> {
            if(item.id===id) {
                if(item.quantity>0){
                    return {...item, quantity:item.quantity-1}
                }
            }
            return item;
        })
        setItems(updatedquantity);
    }

    const total =  items.reduce((prev, curr)=> {
                        return prev+(curr.quantity||0);
                    },0)

    return(
        <>
        <h1>Cart Items: {items.length}</h1>

        {
            items.map((item)=> (
                <div>
                    <h3>{item.id}. {item.name} = {item.price}</h3>
                    {item.quantity>0 ?<div style={{display:'flex', marginTop:'10px'}}><button style={{width:"30px", fontSize:'16px'}} onClick={()=>handlequantity(item.id)}>+</button>
                    <p style={{margin:'0 10px', fontWeight:'bold', fontSize:'20px'}}>Item Quantity:{item.quantity}</p>
                    <button style={{width:"30px", fontSize:'16px'}} onClick={()=>decrequantity(item.id)}>-</button></div>:<button style={{height:'30px',width:"100px", fontSize:'16px'}} onClick={()=>handlequantity(item.id)}>Add to cart</button>}
                </div>
            ))
        }

        <h2>Total Quantity:{total}</h2>
        </>
    );
}

export default Cart;