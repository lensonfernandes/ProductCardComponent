import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card-item-outer'>
        <img className="img-preview" src={props.details.productImage}/>
        <h3 className='item-title'>{props.details.productName}</h3>
        <div className='card-item-stats'>
            
            <span className='img-span'></span>

            <div>
                <p>{props.details.oldPrice}/-</p> <span>{props.details.newPrice}/-</span>
            </div>
        </div>
        <button className='add-button'>ADD TO CART</button>  


    </div>
  )
}

export default Card