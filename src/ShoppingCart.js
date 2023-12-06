import { Route } from "react-router-dom";
import App from "./App";
import { data } from "./data";
import ShoppingProduct from "./ShoppingProduct";


const ShoppingCart=({item,index})=>{



    return(

        <div>

            <p>{ShoppingList.name}</p>
            <img src={ShoppingList.image_url} width={100}/>
            <p>{ShoppingList.short_description}</p>
            <p>{ShoppingList.price}</p>
            
        </div>


    )


}

export default ShoppingCart;



