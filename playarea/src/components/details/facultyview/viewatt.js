import React from 'react'
import { Link } from 'react-router-dom'

class AttendanceFaculty extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Students Attendance</h6>
            <Link to='/faculty'>Back--</Link> 

        </div>
    )
}
}

export default AttendanceFaculty