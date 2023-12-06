import {useState,useEffect} from 'react';
import './App.css';
import { ShoppingList } from './ShoppingList';


function ShoppingProduct({ShoppingList}) {  
    
    
  return (

      
    <div>

            <div>
            <p>{ShoppingList.name}</p>
            <img src={ShoppingList.image_url} width={100}/>
            <p>{ShoppingList.short_description}</p>
            <p>{ShoppingList.price}</p>
            <button>Add To Cart</button>
            </div>

    </div>


  )
}

export default ShoppingProduct;
