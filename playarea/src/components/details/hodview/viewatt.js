import React from 'react'
import { Link } from 'react-router-dom'

class AttendanceHod extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Students Attendance</h6>
            <h6>Faculty Attendance</h6>
            <Link to='/hod'>Back--</Link>
        </div>
    )
}
}

export default AttendanceHod