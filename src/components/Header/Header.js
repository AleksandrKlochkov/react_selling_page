import React from 'react'

const Header = () => {
    return (
        <div class="header">
        <div class="header-autorization-b">
            <div class="container-content">
                <div class="autorization-list-b">
                    <ul class="ul-autorization-list">
                        <li><a href="#">Вход</a></li>
                        <li>|</li>
                        <li><a href="#">Регистрация</a></li>
                    </ul>
                </div>   
            </div>
        </div>

        <div class="header-nav-menu">
              <div class="content-menu-header-fon">
            <div class="container-content">
                <div class="header-nav-menu-cont">
                    <div class="header-logo-brend">
                        <a href="#">
                            <img class="header-logo-img" src="/images/muzmag-logo.png" alt="" />
                        </a>
                    </div>
                    <div class="header-search-b">
                        <div class="input-serch-b">
                            <input class="input-header-search" placeholder="Поиск..." type="text" />
                        </div>
                    </div>
                    <div class="header-bascet-b">
                        <a href="#">
                            <div class="basket-b">
                                <span>1</span>
                            </div>
                            <p href="#">Корзина<br/><span>0 товаров</span></p>
                        </a>
                        

                    </div>
                </div>
            </div>
        </div>
        </div>         
    </div>
    )
   
    
}