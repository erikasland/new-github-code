interface Props {
    cart: number[] | []
}

const Cart: React.FunctionComponent<Props> = ({cart}) => {
    return (
        <div>
            <div>
                <h3>THIS IS THE CART</h3>
                { cart.map(item => item) }
            </div>
        </div>
    )
}

export default Cart;