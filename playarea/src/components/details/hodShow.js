import React from 'react'
import {Link} from 'react-router-dom'

class HodShow extends React.Component{
    constructor(){
        super()
        this.state={
            hod:[]
        }
    }

render(){
    return(
        <div>
        <h4>Listing Details Of Hod</h4>

        <ul>

        <Link to='/hod/students'>View Students Details</Link><br/>
        <Link to='/hod/faculty'>View Faculty Details</Link><br/>
        <Link to='/hod/performance'>View Performance Details</Link><br/>
        <Link to='/hod/attendance'>View Attendance Details</Link><br/>
        <Link to='/hod/marks'>View Marks Details</Link>
        </ul>
        </div>
    )
}
}
export default HodShow