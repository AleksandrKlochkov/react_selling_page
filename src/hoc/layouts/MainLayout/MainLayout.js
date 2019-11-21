import React, {Component} from 'react'
import Home from '../../../pages/Home/Home'
import AboutUs from '../../../pages/AboutUs/AboutUs'
import Contacts from '../../../pages/Contacts/Contacts'
import Cart from '../../../pages/Cart/Cart'

import Header from '../../../components/Header/Header'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'

class MainLayout extends Component {
    state = {
        navLinks: [
            {to: '/home', title: 'Главная', exact: false},
            {to: '/about', title: 'О магазине', exact: false},
            {to: '/contacts', title: 'Контакты', exact: false}
        ]
    }
    render(){
        return(
            <div className="wrapper">
                <Header />
                <Navbar navLinks={this.state.navLinks} />
                <div className="content">
                    <div className="content-box bg-light w">
                        <div className="container">
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/home"/>
                                </Route>
                                <Route exact path="/home" component={Home}/>
                                <Route path="/about" component={AboutUs}/>
                                <Route path="/contacts" component={Contacts}/>
                                <Route path="/cart" component={Cart}/>
                            </Switch>
                        </div>
                    </div>
                </div>
                
                <div className="footer d-flex align-items-center">
                        <Footer />
                </div>
            </div>
        )
    }
}

export default MainLayout

