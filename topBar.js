import React, { Component } from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class TopBar extends Component {
  render() {
    return (
    <div className='topbar '>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6 col-sm-6  col-xs-6 tbp'>
                <a href="#">+91 8464025086</a>
              </div>
              <div className='col-md-6 col-sm-6 col-xs-6 tbp '>
                <a href="#">info@elearninfotech.com</a>
              </div>
          </div>
      </div>
    </div>
    )
  }
}
