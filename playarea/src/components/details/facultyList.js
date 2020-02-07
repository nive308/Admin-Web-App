import React from 'react'
import { Link } from 'react-router-dom'

class FacultyList extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            
           <h6>Faculty Name</h6>
           <h6>Faculty Email</h6>
           <h6>Faculty Mobile</h6>
           <h6>Faculty Performance Details</h6>
           <h6>Faculty Salary</h6>
           <Link to='/admin'>Back--</Link> 
        </div>
    )
}
}

export default FacultyList