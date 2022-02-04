import './Shop.css'


 function Shop(){
    let data = ()=>{
        fetch('./data.json').then(data=>{console.log(data)}).catch(err =>{console.log(err)})
    } 
    {data()}
    return(
        <>
        <h1 className="subtitle">Bakery Catalogue <i class="far fa-laugh-wink"></i> </h1>
        <p className="p-cata">Welcome to our fresh products *</p>
            <div className="shop" id='shop'>shop</div>
        </>
    )

}

export default Shop