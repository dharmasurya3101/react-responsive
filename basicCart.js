import React from 'react'
import  '../style.css'

export default function BasicCart(props) {
  return (
    <div className='height'>
        
      <div className='container'>
        <div className='row'>
        <div className='col-md-3 left'>
        <div className='box left'>
       
        <img  className='image left' src={props.img}/>
        <h4>{props.name}</h4>
       </div>
       </div>
       <div className='col-md-3 left'>
        <div className='box left'>
       
        <img  className='image left' src={props.img}/>
        <h4>{props.name}</h4>
       </div>
       </div>
       <div className='col-md-3 left'>
        <div className='box left'>
       
        <img  className='image left' src={props.img}/>
        <h4>{props.name}</h4>
       </div>
       </div>
       <div className='col-md-3 left'>
        <div className='box left'>
       
        <img  className='image left' src={props.img}/>
        <br />
        <br />
        <h4>{props.name}</h4>
       </div>
       </div>
        </div>
        </div>
        
    </div>
  )
}
