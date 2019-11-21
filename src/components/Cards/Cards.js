import React from 'react'


const Cards = () => {
    return(
        <div class="conent-product-b">
        <ul class="ul-content-product-table">
             <li>
                <div>

                 <a href="#">
                    <div class="product-pictures">
                        <img src="/images/product3.jpg" alt="" />
                    </div>
               
                    <div class="product-category-names">
                        <ul class="ul-product-category-names">
                            <li>Аккардионы</li>
                            <li><i class="fa fa-chevron-right icon"></i></li>
                        </ul>
                        <h3>HOHNER NOVA III 96 (A4271) WHITE</h3>
                    </div>
               
                     <div class="produc-price-sale-b">
                         <div class="product-price-b">
                             <p class="old-price-p"><span>28 899 руб.</span>  -3 000</p>
                             <p class="price-p">25 899 руб.</p>
                         </div>
                     </div>
                 </a>

                 <div class="product-pay-default-btn-b">
                         <a class="product-btn-default-pay" href='#'>В корзину</a>       
                 </div>

                 <p class="product-availability-information"> В наличии</p>
                </div>
            </li>
        </ul>
    </div>
    )
}

export default Cards