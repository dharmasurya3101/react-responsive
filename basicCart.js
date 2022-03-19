import React from 'react'
import  '../style.css'

export default function BasicCart(props) {
  return (
    <div className='box'>
      <div className='.left'>
      <img src={ props.path}/>
      <h4>{props.name}</h4>
      <p>{props.price}</p>
      <button className='button'>Buy Now</button>
      </div>
    </div>
  )
}
