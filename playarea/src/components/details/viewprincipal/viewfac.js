import React from 'react'
import { Link } from 'react-router-dom'

class FacultyPrincipal extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Faculty Names</h6>
            <h6>Faculty email</h6>
            <h6>Faculty Performance</h6>
            <Link to='/principal'>Back--</Link> 

        </div>
    )
}
}

export default FacultyPrincipal