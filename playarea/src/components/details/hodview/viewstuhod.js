import React from 'react'
import { Link } from 'react-router-dom'

class StudentHod extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Students name</h6>
            <h6>Students email</h6>
            <h6>Students Marks</h6>
            <h6>Students Performance</h6>
            <h6>Students Address</h6>
            <h6>Students Fees Details</h6>
            <h6>Students Assignment Details</h6>
            <Link to='/hod'>Back--</Link>

        </div>
    )
}
}

export default StudentHod