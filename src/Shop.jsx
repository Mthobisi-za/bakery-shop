import './Shop.css'
import Data from './data'


 function Shop(){
   
    return(
        <>
        <h1 className="subtitle">Bakery Catalogue <i class="far fa-laugh-wink"></i> </h1>
        <p className="p-cata">Welcome to our fresh products *</p>
            <div className="shop" id='shop'></div>
            <div className="carryCon">
                <div className="empty"></div>
                <div className="products">
                {Data.map((element, index)=>(
                   <div className="product">
                       <h2>Category: {element.category}</h2> <br />
                       <img src={element.url} alt={element.category} />
                       <h2>Price: <span className='price'>{element.price}</span></h2>
                   </div> 
                ))}
            </div>
            <div className="empty"></div>
            </div>
           
        </>
    )

}

export default Shop