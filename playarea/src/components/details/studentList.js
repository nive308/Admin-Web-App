import React from 'react'
import { Link } from 'react-router-dom'

class StudentList extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Student name</h6>
            <h6>Student email</h6>
            <h6>Student fees details</h6>
            <Link to='/admin'>Back--</Link>
        </div>
    )
}
}

export default StudentList