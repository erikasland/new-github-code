import {useState} from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Cart from "./components/Cart/Cart";
import './App.css';
import { Items } from './types';

function App(): JSX.Element {
  const [items, setItems] = useState<Items[]>([
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6}
  ]);

  const [cart, setCart] = useState<number[] | []>([]);

  return (
    <div className="App">
      <div>
        <Header />
        <div>
          <Section items={items} cart={cart} setCart={setCart}/>
          <Cart cart={cart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
