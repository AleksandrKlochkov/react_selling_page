import React, {Component} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends Component{

    state = {
        toogleLinks: false
    }

    toogleLinks(){
        
    }

    renderLinks(links){
        return links.map((link, index)=> {
            return (
                 <li 
                    key={index}
                    className="nav-item"
                    activeClassName="active"
                 >
                    <NavLink exact className="nav-link" to={link.to}>{link.title}</NavLink>
               </li>
            )
        })
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink exact className="navbar-brand" to="/">Shop</NavLink>
                    <button onClick={this} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {this.props.navLinks ? this.renderLinks(this.props.navLinks) : null}
                        </ul>
                    </div>
                </div>
        </nav>
        )
    }
}



export default Navbar