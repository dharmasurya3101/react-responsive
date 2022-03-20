// import React, { Component } from 'react'

// export default class BasicCondition extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        show:false
//     }
//   }
//     render() {
//         let msg;
//         if (this.state.show){
//             msg=<h1>welcome user</h1>
//         }
//         else { msg=<h1>welcome guest</h1>}
//     return msg
//   }
// }

// import React, { Component } from 'react'

// export default class BasicCondition extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//           show:false
         
//       }
//     }
//     render() {
//         let msg;
       
//         return (this.state.show) ? msg=<h1>welcome to user</h1>: msg=<h1>welcome to guest</h1>;
    
    
//   }
// }

import React, { Component } from 'react'

export default class BasicCondition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        choice:2
      }
    }   
    render() {
        let msg;
        switch(this.state.choice)
        {
            case 1: msg=<h1>welcome sunday</h1> 
            break;
            case 2: msg=<h1>Welcome monday</h1> 
            break;
            case 3: msg=<h1>welcome tuesday</h1> 
            break;
            case 4: msg=<h1>welcome wed</h1> 
            break;
            default: msg=<h1>welcome  </h1> 
            break;

        }
      
    return (
      
     msg
    )
  }
}

