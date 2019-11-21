import React from 'react'
import './Header.css'
import Search from '../UI/Search/Search'
import {Link}from 'react-router-dom'
import Cart from '../Cart/Cart'

const Header = () => {
    return (
        <div className="Header">

                <div className="autorization-links header__autorization-links">
                    <div className="container">
                        <ul className="autorization-links__list">
                            <li><Link to="/login">Вход</Link></li>
                            <li>|</li>
                            <li><Link to="/signup">Регистрация</Link></li>
                        </ul> 
                    </div>
                </div>

                <div className="header-box bg-light">
                    <div className="container">
                        <div className="header-box__container">
                            <div className="header-box__logo-box">
                                <Link to="/">
                                    <img className="header-box__logo-img" src="/images/shop_header.png" alt="Shop logo" />
                                </Link>
                            </div>
                            <div className="header-box__search">
                                <Search />
                            </div>
                            <div className="header-box__cart">
                                <Cart />
                            </div>
                        </div>
                    </div>        
            </div> 
    </div>
    )
}

export default Header