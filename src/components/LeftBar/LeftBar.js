import React from 'react'

const LeftBar = () => {
    return(
        <div class="catalog-leftbar-b">
            <ul class="ul-catalog-leftbar">
                <li><div><i class="fa fa-bars icon"></i> Каталог</div>
                    <ul>
                        <li>
                            <a href="#">Гитары<i class="fa fa-angle-right pull-right"></i></a>
                                <ul>
                                    <li><div class="nameCategory"><i class="fa fa-chevron-right icon"></i> Подкатегории</div>    
                                        <ul>
                                            <li><a href="">Акустические<i class="fa fa-angle-right pull-right"></i></a> 
                                                <ul >
                                                    <li><div><i class="fa fa-chevron-right icon"></i> Подкатегории</div>      
                                                        <ul>
                                                            <li><a href="">Аксессуары</a></li>
                                                        </ul>                                                        
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Классические</a></li>
                                            <li><a href="#">Электрогитары</a></li>
                                            <li><a href="#">Бас-гитары</a></li>
                                            
                                        </ul>                                                        
                                    </li>
                                </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default LeftBar