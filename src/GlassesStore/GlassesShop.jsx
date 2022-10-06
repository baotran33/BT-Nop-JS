import React from 'react'
import data from "./data.json"
import ProductList from "./ProductList"

const GlassesShop = () => {
  return (
    
 <div style={{minHeight: "100vh"}} className="bg-primary">
    <img src="/public/image/background.jpg" />
    <div className = "container">
        <h1 className = "text-warning text-center">TRY ON GLASSES APP</h1>
        <ProductList products={data}/>
    </div>
</div>
  
  )
}

export default GlassesShop