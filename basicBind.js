// import React, { Component } from 'react'

// export default class BasicBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:'surya'
//       }
//     }
//     changeName(){
//         this.setState ({
//             name:'sai'
//         })
//     }
//     render() {
//     return (
//       <div>
//           <h1> welcome to {this.state.name}</h1>
//         <button onClick={this.changeName.bind(this)}> submit</button>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'

export default class BasicBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'surya'
      }
    }
    changeName(name1){
        this.setState({
            name:name1
        })
    }
    render() {
    return (
      <div>
          <h1>my name is {this.state.name}</h1>
          <button onClick={()=>this.changeName('rajesh')}> click </button>
      </div>
    
    )
    }
}
