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
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Food from './Food';
import NavBar from './NavBar';
import { quote } from './quote';
import MealSelector from './MealSelector';
import ProductList from './ProductList';
import CartList from './CartList';
import Cart from './Cart';
import Shopping from './Shopping';
import ShoppingProduct from './ShoppingProduct';
import { ShoppingList } from './ShoppingList';

function App() { 



  return (

      <div>

      <NavBar/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}>
      </Route>


      </Routes>


      </div>

    
  )
}

export default App;
