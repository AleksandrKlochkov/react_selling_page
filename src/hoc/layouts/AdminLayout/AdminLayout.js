import React, {Component} from 'react'
import Footer from '../../../components/Footer/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProductCart from '../../../components/ProductsCart/ProductsCart'
import LeftBar from '../../../admin/components/LeftBar/LeftBar'

class AdminLayout extends Component {
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
                <div className="content mt-0">
                     <LeftBar />
                    <div className="container-fluid">
                        <div className="row">
                        
                            <div className="bg-light">
                                <Switch>
                                    <h1>Hello</h1>
                                </Switch>
                            </div>
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

export default AdminLayout

