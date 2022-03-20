import React, { Component } from 'react'

export default class BasicList extends Component {

    render() {
       const snames=['surya','dharma','rajesh','suresh']
    return (
      snames.map((names)=> <p>{names}</p>)
    )
  }
}
