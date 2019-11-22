import React from 'react'
import './ProductsCart.css'

const ProductCart = props => {
    return (

        <div className="product-cart">
            <div className="product-cart__title">
                <h2>Корзина</h2>
            </div>
            {props.carts 
            ?
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Название</th>
                            <th>Количество</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="#">1</td>
                            <td data-label="Название">HOHNER NOVA III 96 (A4271) WHITE</td>
                            <td data-label="Количество">3</td>
                            <td data-label="Стоимость">50000</td>
                            <td><button type="button" className="btn btn-danger btn-sm">Удалить</button></td>
                        </tr>
                        
                        <tr>
                            <td data-label="Итого">50000</td>
                        </tr>
                    </tbody>
                    </table>
                <button type="button" className="btn btn-primary btn-sm">Оформить заказ</button>
            </div>
            :
            <p>Корзина пуста</p>
        }
        </div>

    )
}

export default ProductCart