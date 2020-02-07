import React from 'react'
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom'

class FacultyAccountant extends React.Component{
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
            <th>Faculty Name..</th>
            <th>Faculty Mobile..</th>
            <th>Faculty Payslip..</th>
            </tr>
            </thead>
            </Table>
            <Link to='/accountant'>Back--</Link> 

        </div>
    )
}
}

export default FacultyAccountant