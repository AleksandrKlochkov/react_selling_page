import React from 'react'
import './LeftBar.css'
import {NavLink} from 'react-router-dom'

const LeftBar = props => {
    const renderLinks = (links) => {
        return (
                <ul>
                    {
                        links.map((item, index) => {
                            return (
                                <li key={index}><NavLink to={item.to}><i className={`fa ${item.icon}`} aria-hidden="true"></i>{item.title}</NavLink></li>
                            )
                        })
                    }
                </ul>
            )            
    }
    
    return (
        <div className="left-bar">
            {renderLinks(props.leftBarLinks)}
        </div>
    )
}

export default LeftBar