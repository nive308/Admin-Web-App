import React from 'react'
import {Link} from 'react-router-dom'

class FacultyList extends React.Component{
    constructor(){
        super()
        this.state={
            faculty:[]
        }
    }

render(){
    return(
        <div>
            <h5>Listing Details of Faculty</h5>
        <ul>
    
           <Link to='/faculty/students'>View All Students</Link><br/>
           <Link to='/faculty/performance'>View Performance Details</Link><br/>
           <Link to='/faculty/assignments'>View Assign Assignments</Link><br/>
           <Link to='/faculty/attendance'>View Create Attendance</Link><br/>
           <Link to='/faculty/library'>View Library</Link>

        </ul>
        </div>
    )
}
}
export default FacultyList
 

