import React, { Component } from 'react'
import axios from 'axios'
export default class BasicGet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
     this.setState({
       posts:res.data
     })
    })
    .catch(err=>{
      console.log(err)
     })
  }
  
  render() {
    const{posts}=this.state;
    const sno=posts.map((posts)=><p>{posts.id}</p>)
    const title=posts.map((posts)=><p>{posts.title}</p>)
    return (
      <div>
        <table>
          <tr>
            <th>sno</th>
            <th>title</th>
          </tr>
          <tr>
            <td>{sno}</td>
            <td>{title}</td>
          </tr>
        </table>
      </div>
    )
  }
}

