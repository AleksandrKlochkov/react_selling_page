import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Cart extends Component {
    render(){
        return(
            <div>
                <div className="ckeck-top heading">
                    <h2>CHECKOUT</h2>
                </div>
                <div className="ckeckout-top">
                    <div className="cart-items">
                    <h3>My Shopping Bag (3)</h3>
                    
                        <div className="in-check">
                            <ul className="unit">
                                <li><span>Item</span></li>
                                <li><span>Product Name</span></li>		
                                <li><span>Unit Price</span></li>
                                <li><span>Delivery Details</span></li>
                                <li> </li>
                                <div className="clearfix"> </div>
                            </ul>
                            <ul className="cart-header">
                                <div className="close1"> </div>
                                <li class="ring-in"><NavLink to="/">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQML6D7afs5PE5Nf-DsJXvksGxh99slmBiN4LcR5YCPF3KfkkexVg&s" 
                                    className="img-responsive" alt="images-title"/></NavLink></li>
                                    <li><span className="name">Analog Watches</span></li>
                                    <li><span className="cost">$ 290.00</span></li>
                                    <li><span>Free</span>
                                    <p>Delivered in 2-3 business days</p></li>
                                <div className="clearfix"></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

