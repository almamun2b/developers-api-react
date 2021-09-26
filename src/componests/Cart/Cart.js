import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const { cart } = props;
    cart.map(developer => console.log(developer.name))

    let totalQuantity = 0;
    let total = 0;

    for (const developer of cart) {
        if (!developer.quantity) {
            developer.quantity = 1;
        }
        total = total + developer.salary * developer.quantity;
        totalQuantity = totalQuantity + developer.quantity;
    }

    return (
        <div>
            <h5 ><i className="fas fa-user mb-2"></i> Developer Added: {totalQuantity}</h5>
            <h6 >Total Cost: $ {total.toFixed(2)}</h6>
            <ul className='mt-4 cart-image'>
                {
                    cart.map(developer => <li className='m-1 p-1 rounded-3 bg-primary text-white'><img src={developer.image} alt="" />{developer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;