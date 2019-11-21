import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'

const Cart = () => (
    <div className="cart">
        <Link to="/basket">
            <div className="cart__icon">
                <span>1</span>
            </div>
            <p>Корзина<br/><span>0 товаров</span></p> 
        </Link>
    </div>
)

export default Cart