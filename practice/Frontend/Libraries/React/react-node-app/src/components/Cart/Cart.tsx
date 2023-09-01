import React from "react";
import "./cart.css";
import {Bike} from "./../../interface";

interface Props {
    cart: [] | Bike[],
    setCart: React.Dispatch<React.SetStateAction<[] | Bike[]>>
}

const Cart:React.FunctionComponent<Props> = ({cart, setCart}) => {

    const removeItem = (i: number) => {
        let cartToUpdate = [...cart];
        cartToUpdate.splice(i, 1)
        setCart(cartToUpdate);
    }

    return (
        <div className="cart-item-wrapper">
            {
                cart.map((item, i) => <div className="cart-item-container" key={i}><p className="cart-item" key={i} onClick={() => removeItem(i)}> { item.name } </p></div>)
            }
        </div>
    )
}

export default Cart;