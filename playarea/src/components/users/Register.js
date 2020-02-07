import React from 'react'
import {connect} from 'react-redux' 
import {startRegisterUser} from '../actions/user'
 import { ButtonToggle,FormGroup, Label, Input } from 'reactstrap';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:'',
            role:''
        }
    }
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
    username:this.state.username,
    email:this.state.email,
    password:this.state.password  ,
    role:this.state.role 
    }
    this.props.dispatch(startRegisterUser(formData,this.props))
    
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
render(){
    return(
        <div className="container col-md-4">
            
            <FormGroup>
            <Label for="name">Name</Label>
            <Input type="FormText" value={this.state.username}  onChange={this.handleChange} name="username" id="name" placeholder="Please Enter Your Name" />
            </FormGroup>

            <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" value={this.state.email} onChange={this.handleChange}  name="email" id="exampleEmail" placeholder="Please Enter Your Email" />
            </FormGroup>

            <FormGroup>
            <Label for="password">Password</Label>
            <Input type="FormText" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Please Enter Your Password" />
            </FormGroup>

            {/* <FormGroup>
            <Label for="role">Role</Label>
            <Input type="FormText" value={this.state.role} onChange={this.handleChange} name="role" placeholder="Please Enter Your Role" />
            </FormGroup> */}
            <Label for="role">Role</Label>

            <select class="browser-default custom-select" onChange={this.handleChange} name="role">
                <option selected>Select</option>
                <option value="admin">admin</option>
                <option value="principal">principal</option>
                <option value="hod">hod</option>
                <option value="faculty">faculty</option>
                <option value="accountant">accountant</option>

            </select>
                
            <br/>
            <br/>
            <ButtonToggle color="primary" onClick={this.handleSubmit}>Submit</ButtonToggle>
        </div>
        )
    }
}
export default connect()(Register)
