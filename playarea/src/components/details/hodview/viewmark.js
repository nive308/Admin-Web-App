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
            <h6>Students Marks</h6>
            <Link to='/hod'>Back--</Link>

        </div>
    )
}
}

export default FacultyHod