import React from 'react'
import { Link } from 'react-router-dom'

class AccountantList extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            
            <h6>Create Invoice</h6>
            <h6>view students.</h6>
            <h6>View faculty..</h6>
            <h6>Payslip for employees</h6>
            <Link to='/admin'>Back--</Link>
        </div>
    )
}
}

export default AccountantList

