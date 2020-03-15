import React from 'react'
import './Card.css'

const Card = props => {
  const {frontImg, logo, flipped, onClick} = props
  const img = flipped ? frontImg : logo
  return (
    <div className="Card" onClick={onClick}>
      <img src={img} alt=""/>
    </div>
  )
}

export default Card