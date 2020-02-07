import React from 'react'
import { Link } from 'react-router-dom'

class StudentFaculty extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Students Name</h6>
            <h6>Students Email</h6>
            <h6>Students Mobile</h6>
            <h6>Students Address</h6>
            <h6>Students Fees Details</h6>
            <h6>Students Assignment Details</h6>
            <Link to='/faculty'>Back--</Link> 

        </div>
    )
}
}

export default StudentFaculty