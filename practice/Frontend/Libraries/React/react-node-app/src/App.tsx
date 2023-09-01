import React, {useState} from "react";
import Header from "./components/Header/Header";
import Shopping from "./components/Shopping/Shopping";
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import './App.css';
import {Bike} from './interface'

function App(): JSX.Element {
  const [bikes, setBikes] = useState<[] | Bike[]>([
    {name: "TS75 Colt	75", type: "dualsport"},
    {name: "TS80 Colt 80", type: "dualsport"},
    {name:"TS90 Honcho 90", type: "dualsport"},
    {name: "TS100 Honcho	100", type: "dualsport"},
    {name: "TS125 Duster	125", type: "dualsport"},
    {name: "TS185 Sierra	185", type: "dualsport"},
    {name: "TS200 200", type: "dualsport"},
    {name: "TS250 Savage 250", type: "dualsport"},
    {name: "GSXR", type: "crotchrocket"},
    {name: "scooter1", type: "scooter"},
    {name: "scooter23", type: "scooter"},
    {name: "scooter413", type: "scooter"},
    {name: "scooter544", type: "scooter"}
  ]);

  const [cart, setCart] = useState<[] | Bike[]>([]);
  const [dualSportsOnly, setDualSportsOnly] = useState<boolean>(false);

  return (
    <div className="App">
      <Header/>
      <button onClick={() => setDualSportsOnly(!dualSportsOnly)}>Dual Sports Only</button>
      <p>{`${dualSportsOnly}`}</p>
      <div className='shopping-cart-wrapper'>
        <Shopping dualSportsOnly={dualSportsOnly} bikes={bikes} setCart={setCart} cart={cart}/>
        <Cart cart={cart} setCart={setCart}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
