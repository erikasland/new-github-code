import React from "react";
import './shopping.css';
import {Bike} from './../../interface';

interface Props {
    bikes: [] | Bike[],
    cart: [] | Bike[],
    setCart: React.Dispatch<React.SetStateAction<[] | Bike[]>>,
    dualSportsOnly: boolean
}

const Shopping:React.FunctionComponent<Props> = ({bikes, cart, setCart, dualSportsOnly}) => {
    const addToCart = (i) => {
        setCart([...cart, bikes[i]]);
    }

    const renderBikes = () => {
            return bikes.map((bike, i) => {
                    if(dualSportsOnly){
                        console.log(bike.type)
                        if(bike.type === "dualsport"){
                            return (
                                <div className="shopping-wrapper" key={i} onClick={() => addToCart(i)}>
                                    <p>{bike.name}</p>
                                </div>
                            )
                        }
                    } else {
                        return (
                            <div className="shopping-wrapper" key={i} onClick={() => addToCart(i)}>
                                <p>{bike.name}</p>
                            </div> 
                        )
                    }
            }
        )
    }

    return (
        <section>
            { renderBikes() }
        </section>
    )
}

export default Shopping;