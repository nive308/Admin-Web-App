import React from 'react'
import { Link } from 'react-router-dom'

class InvoiceAccountant extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <ul>

            <li><h6>Invoice Number</h6></li>
            <li> <h6>Payments</h6></li>
            <li><h6>Due Date</h6></li>
            <li><h6>Tax</h6></li>
            </ul>
            
            <Link to='/accountant'>Back--</Link> 

        </div>
    )
}
}

export default InvoiceAccountant