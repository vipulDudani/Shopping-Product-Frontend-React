import {useState,useEffect} from 'react';
import './App.css';
import { NavLink, Route, Routes, useLinkClickHandler, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductData from './ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './CartSlice';
import { remove } from './CartSlice';
import { ShoppingList } from './ShoppingList';


function Product({ShoppingList}) { 

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addtoCart=()=>{
        dispatch(add(ShoppingList))
    }

    console.log(cart);

    const removeFromCart=()=>{
        dispatch(remove(ShoppingList.id))
    }
    




  return (

      <div> 


        <p><b>{ShoppingList.name}</b></p>
        <img src={ShoppingList.image_url} width={200}/>
        <p>{ShoppingList.short_description}</p>
        <p>{ShoppingList.price}</p>

        {
            cart.some((p) => p.id===ShoppingList.id) ? (<button onClick={removeFromCart}>Remove</button>) : (<button onClick={addtoCart}>Add to Cart</button>)
        }


      </div>

    
  )
}

export default Product;
