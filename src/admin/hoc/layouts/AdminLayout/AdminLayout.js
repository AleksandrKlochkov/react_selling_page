import React, {Component} from 'react'
import Footer from '../../../../components/Footer/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'
import LeftBar from '../../../components/LeftBar/LeftBar'
import Home from '../../../pages/Home/Home'
import Position from '../../../pages/Position/Position'
import Orders from '../../../pages/Orders/Orders'
import Contacts from '../../../pages/Contacts/Contacts'
import Navbar from '../../../components/Navbar/Navbar'

class AdminLayout extends Component {
    state = {
        navLinks: [
            {to: '/logout', title: 'Выход', exact: false}
        ],
        leftBarLinks: [
            {
                to: 'home',
                title: 'Главная',
                icon: 'fa-home'
            },
            {
                to: 'position',
                title: 'Позиции',
                icon: 'fa-th-large'
            },
            {
                to: 'orders',
                title: 'Заказы',
                icon: 'fa-shopping-basket'
            },
            {
                to: 'contacts',
                title: 'Контакт-центер',
                icon: 'fa-phone-square'
            }
        ]
    }
    render(){
        return(
            <div className="wrapper">
                <div className="content mt-0">
                    <Navbar navLinks={this.state.navLinks} />
                        <div className="row m-0 flex-auto">
                                <LeftBar navLinks={this.state.navLinks} leftBarLinks={this.state.leftBarLinks}/>
                            <div className="col pt-4 pb-4 bg-light">
                                <Switch>
                                    <Route exact path="/admin">
                                        <Redirect to="/admin/home"/>
                                    </Route>
                                    <Route path="/admin/home" component={Home}/>
                                    <Route path="/admin/position" component={Position}/>
                                    <Route path="/admin/orders" component={Orders}/>
                                    <Route path="/admin/contacts" component={Contacts}/>
                                </Switch>
                            </div>
                        </div>
                </div>
                
                <div className="footer pr-2 pl-2 d-flex align-items-center">
                        <Footer />
                </div>
            </div>
        )
    }
}

export default AdminLayout

