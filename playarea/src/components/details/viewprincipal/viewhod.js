import React from 'react'
import { Link } from 'react-router-dom'

class HodPrincipal extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            
            <h6>Hod Name..</h6>
            <h6>Hod Email..</h6>
            <h6>Hod Mobile..</h6>
            <h6>Hod Salary..</h6>
            <h6>Hod Department..</h6>
            <h6>Hod Experience..</h6>
            
            <Link to='/principal'>Back--</Link> 
        </div>
    )
}
}

export default HodPrincipal