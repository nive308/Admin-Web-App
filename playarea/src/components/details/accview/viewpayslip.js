import React from 'react'
import { Link } from 'react-router-dom'

class PayslipAccountant extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            
            <h6>Hod Payslip Details</h6>
            <h6>Faculty Payslip Details</h6>
            <h6>Librarian Payslip Details</h6>
            <Link to='/accountant'>Back--</Link> 

        </div>
    )
}
}

export default PayslipAccountant