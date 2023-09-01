import { Items } from './../../types';

interface Props {
    items: Items[],
    cart: [] | number[],
    setCart: React.Dispatch<React.SetStateAction<[] | number[]>>
  }

const Section: React.FunctionComponent<Props> = ({items, cart, setCart}) => {
    const handleClick = (item: number) => {
        setCart([...cart, item]);

        console.log(cart)
    };

    return (
        <div>
            <div>
                <h3>THIS IS THE BODY</h3>
                <ul>
                    { items.map(item => (<li key={item.number} onClick={() => handleClick(item.number)}> {item.number} </li>)) }
                </ul>
            </div>
        </div>
    )
}

export default Section;