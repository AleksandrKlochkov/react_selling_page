import React from 'react'
import './Header.css'
import Search from '../UI/Search/Search'
import {Link}from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">

                <div className="autorization-links header__autorization-links">
                    <div className="container">
                        <ul className="autorization-links__list">
                            <li><a href="#">Вход</a></li>
                            <li>|</li>
                            <li><a href="#">Регистрация</a></li>
                        </ul> 
                    </div>
                </div>

                <div className="header-box bg-light">
                    <div className="container">
                        <div className="header-box__container">
                            <div className="header-box__logo-box">
                                <Link to="/">
                                    <img className="header-box__logo-img" src="/images/shop_header.png" alt="" />
                                </Link>
                            </div>
                            <div className="header-box__search">
                                <Search />
                            </div>
                            <div className="header-bascet-b">
                                <Link to="/basket">
                                    <div className="basket-b">
                                        <span>1</span>
                                    </div>
                                    <p>Корзина<br/><span>0 товаров</span></p> 
                                </Link>
                            </div>
                        </div>
                    </div>        
            </div> 
    </div>
    )
}

export default Header