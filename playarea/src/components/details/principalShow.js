import React from 'react'
import {Link} from 'react-router-dom'

class PrincipalList extends React.Component{
    constructor(){
        super()
        this.state={
            Principal:[]
        }
    }

render(){
    return(
        <div>

        <h5>Listing Details of Principal</h5>

        <ul>
        <Link to='/principal/student'>View All students</Link><br/>
        <Link to='/principal/faculty'>View All Faculty</Link><br/>
        <Link to='/principal/hod'>View All HOD's</Link> <br/>
        <Link to='/principal/performance'>View performance Details</Link>
        </ul>
        
        </div>
    )
}
}
export default PrincipalList