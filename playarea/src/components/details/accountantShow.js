import React from 'react'
import {Link} from 'react-router-dom'

class AccountantList extends React.Component{
    constructor(){
        super()
        this.state={
            accountant:[]
        }
    }

render(){
    return(
        <div>
         <h5>Listing Details of Accountant</h5>

        <ul>
           <Link to='/accountant/invoice'>Create Invoice</Link><br/>
           <Link to='/accountant/students'>View All Students</Link><br/>
           <Link to='/accountant/faculty'>View All faculty</Link><br/>
           <Link to='/accountant/pay_slips'>Generate Payslips For Employees</Link>

        </ul>
        </div>
    )
}
}
export default AccountantList