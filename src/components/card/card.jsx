import React from 'react'
import './card.css'





export default function CardProduct({src, title, price}) {
  return (
    <div className='card'>
      <img src={src} alt="" />
      <div className='infoImg'>
        <h4>{title}</h4>
        <p style={{marginTop: '-10px'}}>{price}</p>
      </div>
    </div>
  )
}


export function Star({src, title, desk, bgColor}) {
  return (
    <div className='card2' style={{backgroundColor: bgColor}}>
      <img src={src} alt="" />
      <h4>{title}</h4>
      <p>{desk}</p>
    </div>
  )
}