import React from 'react'
import { Link } from 'react-router-dom'

class StudentFee extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Paid List</h6>
            <h6>Pending List</h6>
            <h6>Due date</h6>
            <Link to='/admin'>Back..</Link>
        </div>
    )
}
}

export default StudentFee