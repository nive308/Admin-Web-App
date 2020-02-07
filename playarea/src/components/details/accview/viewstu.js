import React from 'react'
import { Table } from 'reactstrap';

import { Link } from 'react-router-dom'

class StudentAccountant extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <Table striped>
            <thead>
                    <tr>
            <th>Students Name</th>
            <th>Students Email</th>
            <th>Students Mobile</th>
            <th>Students Fees Details</th>
            </tr>
            </thead>
            </Table>
            <Link to='/accountant'>Back--</Link> 

        </div>
    )
}
}

export default StudentAccountant