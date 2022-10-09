import React from 'react'
import './ProductCard.css'
const ProductCard = ({img,name,price}) => {
  return (
    <div className='product-card'>
        <div className="card">
            <img src={img} className='card-img-top' alt="image" />
            <div className="card-body">
                <h2>{name}</h2>
                <h4> ₹{price}</h4>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
