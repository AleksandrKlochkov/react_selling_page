import React, {Component} from 'react'
import Home from '../../../pages/Home/Home'
import AboutUs from '../../../pages/AboutUs/AboutUs'
import Contacts from '../../../pages/Contacts/Contacts'
import Product from '../../../pages/Product/Product'

import Header from '../../../components/Header/Header'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import Login from '../../../pages/Login/Login'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Error404} from '../../../pages/Error404/Error404'
import ProductCart from '../../../components/ProductsCart/ProductsCart'
import Registration from '../../../pages/Registration/Registration'

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
                <div className="content mt-3">
                    <div className="content-box bg-light">
                        <div className="container-wrap">
                        <div className="row">
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/home"/>
                                    </Route>
                                    <Route exact path="/home">
                                        <Redirect to="/home/tables"/>
                                    </Route>
                                    <Route path="/home/:id" component={Home}/>
                                    <Route path="/product/:id" component={Product}/>
                                    <Route path="/about" component={AboutUs}/>
                                    <Route path="/contacts" component={Contacts}/>
                                    <Route path="/login" component={Login}/>
                                    <Route path="/signup" component={Registration}/>
                                    <Route component={Error404}/>
                                </Switch>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                                <div className="container-wrap bg-white border">
                                         <ProductCart />
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="footer d-flex align-items-center">
                     <div className="container">
                        <Footer />
                     </div>
                </div>
            </div>
        )
    }
}

export default MainLayout

