import React from 'react'
import './NewOne.css'
const NewOne = ({img}) => {
  return (
    <div className='new-one-container'>
        <div className="new-one-img">
            <img src={img} alt="image" />
        </div>
        <div className="new-one-content">
            <h2>Brand New Watch</h2>
            <h2>Fossil Gen5</h2>
            <h3>Get it at ₹24000 only-</h3>
        </div>
    </div>
  )
}

export default NewOne
