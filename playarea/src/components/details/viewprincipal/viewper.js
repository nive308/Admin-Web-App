import React from 'react'
import { Link } from 'react-router-dom'

class PerformancePrincipal extends React.Component{
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
            <Link to='/principal'>Back--</Link> 

        </div>
    )
}
}

export default PerformancePrincipal