import {useState,useEffect} from 'react';
import './App.css';
import { NavLink, Route, Routes, useLinkClickHandler, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductData from './ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterSlice';
import { store } from './store';
import {information} from './information'
import { data } from './data';
import About from './About';
import Contact from './Contact';
import Food from './Food';
import NavBar from './NavBar';
import { quote } from './quote';
import MealSelector from './MealSelector';
import ProductList from './ProductList';
import CartList from './CartList';
import CartSlice from './CartSlice';
import Shopping from './Shopping';
import ShoppingProduct from './ShoppingProduct';
import { ShoppingList } from './ShoppingList';
import CartItem from './CartItem';


function Cart() { 

    const {cart}=useSelector((state)=>state);

    const [total,settotal]=useState(0);

    useEffect(()=>{

        settotal(cart.reduce((acc,total)=>acc+total.price,0))

    },[cart])



  return (

      <div>


        {

            cart.length > 0 ? 
            (
            
            <div style={{display:'flex'}}>
            
            {
              
              cart.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
            
            }


            <div>
            <div>Total items: {cart.length}</div>
            <div>Total is : {total}</div>
            </div>
            </div>
            
            ) : 
            
            
            (<div><p>No Items in Cart</p></div>)



        }




      </div>

    
  )
}

export default Cart;
