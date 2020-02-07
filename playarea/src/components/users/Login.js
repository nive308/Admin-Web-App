import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../actions/user'
import { ButtonToggle,FormGroup, Label, Input} from 'reactstrap';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
    email:this.state.email,
    password:this.state.password   
    }
    this.props.dispatch(startLoginUser(formData,this.props))
    
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
    render(){
        return(
            <div className="container col-md-4">
            <h2 className="text-center">Login</h2>

            <FormGroup>
               <Label for="email">Email</Label>
                <Input type="email" value={this.state.email} onChange={this.handleChange}  name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="FormText" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
            </FormGroup>
               
            <ButtonToggle color="primary" onClick={this.handleSubmit}>Submit</ButtonToggle>

         </div>
        )
    }
}
export default connect()(Login)
