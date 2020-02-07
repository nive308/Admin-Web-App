import React from 'react'
import {Link} from 'react-router-dom'


class AdminList extends React.Component{
    constructor(){
        super()
        this.state={
            admin:[]
        }
    }

render(){
    return(
        <div>
            <h4>Listing Details Of Admin</h4>
        <ul>
        <Link to="admin/students">View All Students </Link><br/>
        <Link to="admin/hod_details">View All Hod </Link><br/>
        <Link to="admin/fac_details">View All Faculty</Link><br/>
        <Link to="admin/student_fee_details">View Students Fees Details</Link><br/>
        <Link to="admin/employee_salary">View Employee Salary Details</Link><br/>
        <Link to="admin/performance">View Performance Details</Link>

        </ul>
        </div>
    )
}
}
export default AdminList