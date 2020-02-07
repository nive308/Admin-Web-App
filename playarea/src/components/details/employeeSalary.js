import React from 'react'
import { Link } from 'react-router-dom'

class EmployeeSalary extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Vice Principal salary</h6>
            <h6>Hod salary</h6>
            <h6>Faculty salary</h6>
            <h6>Accountant salary</h6>
            <h6>Librarian salary</h6>
            <Link to='/admin'>Back..</Link>
        </div>
    )
}
}

export default EmployeeSalary