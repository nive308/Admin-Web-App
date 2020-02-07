import React from 'react'
import { Link } from 'react-router-dom'

class AssignFaculty extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Assigments for students</h6>
            <Link to='/faculty'>Back--</Link> 

        </div>
    )
}
}

export default AssignFaculty