import React, { Component } from 'react'

export default class BasicStates extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name: 'Dharma',
            number: 9119119119,
            job: 'Angular developer',
            address: 'secundrabad',
      }
    }  
    
    changeName=()=>
    {
        this.setState({
            name:'Surya',
            number: 9009009009,
            job: 'React dev',
            address: 'Hyderabad',
        })
    }
  render() {
    return (
      <div>
          <h2>My name is {this.state.name}</h2>
          <h2>my number is {this.state.number} </h2> 
          <h2>my job is {this.state.job}</h2> 
          <h2>I live in {this.state.address} </h2>
          <button onClick={this.changeName}>Submit</button>
      </div>
    )
  }
}
