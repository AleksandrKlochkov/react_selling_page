import React, {Component} from 'react'
import './Home.css'
import Cards from '../../components/Cards/Cards'

class Home extends Component{

    state = {
        productSwitching: '',
        cards: [
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2000, discont: 0,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7',  description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2500, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2500, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 4000, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2500, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2400, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2500, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 21500, discont: 80, imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание',  count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 2500, discont: 80,  imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание', count: 5},
            {id: 151, category: 'Аккардионы', article: 4564544646465564, title: 'HOHNER NOVA III 96 (A4271) WHITE', price: 20500, discont: 80, imgSrc: 'product3.jpg', shortDiscription: 'Кнопочный аккордеон 7/8, трехголосный, в правой клавиатуре - 72 кнопки, 5 регистров, в левой клавиатуре - 96 басов, 3 регистра, цвет белый, B-stepped, вес 7', description: 'Полное описание',  count: 5}
        ]
    }


    render(){
        return(
            <div>
                <Cards cards={this.state.cards} productSwitching={this.state.productSwitching}/>
            </div>  
        )
    }
}

export default Home