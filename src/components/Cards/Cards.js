import React, {Component} from 'react'
import './Cards.css'
import Sorting from '../../components/Sorting/Sorting'

import {Link, Route} from 'react-router-dom'

class Cards extends Component {

renderCardsLines(cards) {
    if(cards.length > 0) {
        return cards.map((item, index) => {
            return (
                <li key={index}>
                    <div>
                        <div className="img-picture-product-line">
                            <div className="product-pictures-line">
                                <Link to={`product/${item.id}`} >
                                    <img src={`/images/${item.imgSrc}`} alt="Product images"/>
                                </Link>
                            </div>
                        </div>	
            
                        <div className="text-product-line">
                            <div className="product-category-names-line">
                                <ul className="ul-product-category-names-line">
                                    <li>{item.category}</li>
                                    <li><i className="fa fa-chevron-right icon"></i></li>
                                </ul>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="product-item number">
                                <p>Артикул: <span>{item.article}</span></p>
                            </div>
                            <div className="product-text-short-description">
                                <p>{item.shortDiscription}<Link to={`product/${item.id}`} >подробнее...</Link></p>
                            </div>  
                        </div>
            
                        <div className="text-product-line-two">
                            <div className="produc-price-sale-b-line">
                                <div className="product-price-b-line">
                                    {item.discont>0 ? <p className="old-price-p-line"><span>{+item.price + ((+item.price * +item.discont)/100)} руб.</span> -{((+item.price * +item.discont)/100)}</p>: null}
                                    <p className="price-p-line">{item.price} руб.</p>
                                </div>
                            </div>
                        </div>
            
                        <div className="product-pay-default-btn-b-line">
                            <Link className="product-btn-default-pay-line" href="#">В корзину</Link>       
                        </div>
                    </div>
                </li>   
            )
        })
    }else{
        return (
            <p>Товаров пока нет</p>
        )
    }
}

renderCardsTables(cards){
    if(cards.length>0){
        return cards.map((item, index) => {
            return (
                <li key={index}>
                        <div>
                            <Link to={`product/${item.id}`} >
                                <div className="product-pictures">
                                    <img src={`/images/${item.imgSrc}`} alt="" />
                                </div>
                        
                                <div className="product-category-names">
                                    <ul className="ul-product-category-names">
                                        <li>{item.category}</li>
                                        <li><i className="fa fa-chevron-right icon"></i></li>
                                    </ul>
                                    <h3>{item.title}</h3>
                                </div>
                        
                                <div className="produc-price-sale-b">
                                    <div className="product-price-b">
                                    {item.discont>0 ? <p className="old-price-p"><span>{+item.price + ((+item.price * +item.discont)/100)} руб.</span> -{((+item.price * +item.discont)/100)}</p>: null}
                                        <p className="price-p">{item.price} руб.</p>
                                    </div>
                                </div>
                            </Link>

                            <div className="product-pay-default-btn-b">
                                    <Link className="product-btn-default-pay">В корзину</Link>       
                            </div>
                        </div>
                    </li>
                )
            })
        }else{
            return (
                <p>Товаров пока нет</p>
            )
        }
}
   
    render(){
        console.log(this.props)
        return(
            <div className="conent-product-b">
                                <Sorting />
                <Route path="/home/tables">
                     <ul className="ul-content-product-table">
                        { this.renderCardsTables(this.props.cards) }
                     </ul>
                </Route>

                <Route path="/home/lines">
                    <ul className="ul-content-product-line">
                        { this.renderCardsLines(this.props.cards) }
                    </ul>
                </Route>
            </div>
        )
    }
}

export default Cards