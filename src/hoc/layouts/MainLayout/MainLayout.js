import React, {Component} from 'react'
import Home from '../../../pages/Home/Home'
import AboutUs from '../../../pages/AboutUs/AboutUs'
import Contacts from '../../../pages/Contacts/Contacts'
import Cart from '../../../pages/Cart/Cart'
import Navbar from '../../../components/Navbar/Navbar'
import {Switch, Route} from 'react-router-dom'



class MainLayout extends Component{
    state = {
        navLinks: [
            {to: '/', title: 'Главная'},
            {to: '/about', title: 'О магазине'},
            {to: '/contacts', title: 'Контакты'}
        ]
    }
    render(){
        return(
                <div className="wrapper">
                    <Navbar navLinks={this.state.navLinks} />
                    <div className="content">
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={AboutUs}/>
                                <Route path="/contacts" component={Contacts}/>
                                <Route path="/cart" component={Cart}/>
                            </Switch>
                        </div>
                    </div>
                    <div className="footer">
                           
                    </div>
                </div>
        )
    }
}

export default MainLayout

