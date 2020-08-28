import React from 'react';
import {Button} from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice, course) => totalPrice + parseFloat(course.Price),0)
    console.log(totalPrice);
    const tax = Math.round(totalPrice / 10, 2);
    const formatNumber = num => {
         const precision = num.toFixed(2);
         return Number(precision);
     }
    return (
        <div style={
            {
                marginTop: "20px"
            }
        }>
             <h4>Order Summary:</h4>
            <p>Courses Enrolled: {cart.length}</p>
             <p>Total Course Price:$ {formatNumber(totalPrice)}</p> 
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price:$ {totalPrice + tax}</p>
            <Button className="cart" variant="primary">Checkout</Button>
        </div>
    );
};

export default Cart;