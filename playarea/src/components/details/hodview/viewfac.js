import React from 'react'
import { Link } from 'react-router-dom'

class FacultyHod extends React.Component{
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
            <Link to='/hod'>Back--</Link>

        </div>
    )
}
}

export default FacultyHod