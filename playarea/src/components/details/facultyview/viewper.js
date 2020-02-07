import React from 'react'
import { Link } from 'react-router-dom'

class PerformanceFaculty extends React.Component{
   constructor(){
   super()
   this.state={
      
   }
}

render(){
    return(
        <div>
            <h6>Students Performance</h6>
            <Link to='/faculty'>Back--</Link> 

        </div>
    )
}
}

export default PerformanceFaculty