import React from 'react'

const Breadcrumb = () => {
    return(
        <div class="pagination-links-tags-b">
            <div class="pagination-links-tags-cont">
                <ul class="ul-pagination-links-tags">
                    <li><a href="">Главная</a></li>
                    <li><i class="fa fa-chevron-right icon"></i></li>
                    <li><a  href="">Предыдущая</a></li>  
                    <li><i class="fa fa-chevron-right icon"></i></li>
                    <li><a class="activ-pagination-links-tags" href="">Активная</a></li>
                    <li><i class="fa fa-chevron-right icon"></i></li>
                </ul>
            </div>   
        </div>
    )
}

export default Breadcrumb