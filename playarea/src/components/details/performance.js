import React from 'react'
import { Link } from 'react-router-dom'

class Performance extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            
            <h6>Hod Performance</h6>
            <h6>Faculty Performance</h6>
            <h6>Students Performance</h6>
            <h6>Accountant Performance</h6>
           
            <Link to='/admin'>Back--</Link>
        </div>
    )
}
}

export default Performance