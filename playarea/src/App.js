import React from 'react';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import "./css/bootstrap.css"

import _ from 'lodash'
import {connect} from 'react-redux'
import {startLogoutUser} from './components/actions/user'

import Home from './components/home/home'
import Register from './components/users/Register'
import Login from './components/users/Login'

import adminShow from './components/details/adminShow'
import accountantShow from './components/details/accountantShow'
import facultyShow from './components/details/facultyShow'
import hodShow from './components/details/hodShow'
import principalShow from './components/details/principalShow'

import StudentList from './components/details/studentList'
import HodList from './components/details/hodList'
import AccountantList from './components/details/accountantList'
import FacultyList from './components/details/facultyList'
import StudentFee from './components/details/studentfee'
import EmployeeSalary from './components/details/employeeSalary'
import Performance from './components/details/performance'

import StudentPrincipal from './components/details/viewprincipal/viewstu'
import FacultyPrincipal from './components/details/viewprincipal/viewfac'
import HodPrincipal from './components/details/viewprincipal/viewhod'
import PerformancePrinciapl from './components/details/viewprincipal/viewper'


import StudentHod from './components/details/hodview/viewstuhod'
import FacultyHod from './components/details/hodview/viewfac'
import PerformanceHod from './components/details/hodview/viewper'
import AttendanceHod from './components/details/hodview/viewatt'
import MarkHod from './components/details/hodview/viewmark'

import AttendanceFaculty from './components/details/facultyview/viewatt';
import LibraryFaculty from './components/details/facultyview/viewlibrary';
import PerformanceFaculty from './components/details/facultyview/viewper';
import AssignFaculty from './components/details/facultyview/viewass';
import StudentFaculty from './components/details/facultyview/viewstu';

import StudentAccountant from './components/details/accview/viewstu';
import FacultyAccountant from './components/details/accview/viewfac';
import PayslipAccountant from './components/details/accview/viewpayslip';
import InvoiceAccountant from './components/details/accview/viewinvoice'
import swal from 'sweetalert'


function App(props) {

  const handleLogout = () => {
    props.dispatch(startLogoutUser(props))
    swal('logged  out')
   localStorage.clear()
  }

  return (

    <BrowserRouter>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          
          <ul className="navbar-nav">

            {
              _.isEmpty(props.user) ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users/login">Login</Link>
                  </li>
                 
                </React.Fragment>
              ) : (
                  
              <React.Fragment>

                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>

                  {(props.user.role=="admin")&&<li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                  </li>}

                  {(props.user.role=="principal"|| props.user.role=="admin")&&<li className="nav-item">
                    <Link className="nav-link" to="/principal">Principal</Link>
                  </li>}

                  {(props.user.role=="hod"|| props.user.role=="admin")&&<li className="nav-item">
                    <Link className="nav-link" to="/hod">Hod</Link>
                  </li>}

                  {(props.user.role == 'faculty' || props.user.role=='admin') &&<li className="nav-item">
                    <Link className="nav-link" to="/faculty">Faculty</Link>
                  </li>}

                  {(props.user.role=="accountant"||props.user.role=="admin")&&<li className="nav-item">
                    <Link className="nav-link" to="/accountant">Accountant</Link>
                  </li>}
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout} to="/logout">Logout</Link>
                  </li>

                </React.Fragment>
              )
                
            }
          </ul>
        </div>
      </nav>

      

      <Switch>
       
        <Route path="/users/register" component={Register} />
        <Route path="/users/login" component={Login}/>
       
        <Route path="/admin" component={adminShow} exact={true} />
        <Route path="/principal" component={principalShow} exact={true}/>
        <Route path="/hod" component={hodShow} exact={true}/>
        <Route path="/faculty" component={facultyShow} exact={true}/>
        <Route path="/accountant" component={accountantShow} exact={true}/>
  
       <Route path="/admin/students" component={StudentList} exact={true}/>
       <Route path="/admin/hod_details" component={HodList} exact={true}/>
       <Route path="/admin/fac_details" component={FacultyList} exact={true}/>
       <Route path="/admin/student_fee_details" component={StudentFee} exact={true}/>
       <Route path="/admin/employee_salary" component={EmployeeSalary} exact={true}/>
       <Route path="/admin/performance" component={Performance} exact={true}/>
       
       <Route path="/accdetails" component={AccountantList} exact={true}/>

       <Route path='/hod/students' component={StudentHod} exact={true}/>
       <Route path='/hod/faculty' component={FacultyHod} exact={true}/>
       <Route path='/hod/performance' component={PerformanceHod} exact={true}/>
       <Route path='/hod/attendance' component={AttendanceHod} exact={true}/>
       <Route path='/hod/marks' component={MarkHod} exact={true}/>
       
       <Route path='/faculty/attendance' component={AttendanceFaculty} exact={true}/>
       <Route path='/faculty/performance' component={PerformanceFaculty} exact={true}/>
       <Route path='/faculty/assignments' component={AssignFaculty} exact={true}/>
       <Route path='/faculty/students' component={StudentFaculty} exact={true}/>
       <Route path='/faculty/library' component={LibraryFaculty} exact={true}/>
       
       <Route path='/accountant/students' component={StudentAccountant} exact={true}/>
       <Route path='/accountant/faculty' component={FacultyAccountant} exact={true}/>
       <Route path='/accountant/pay_slips' component={PayslipAccountant} exact={true}/>
       <Route path='/accountant/invoice' component={InvoiceAccountant} exact={true}/>

       <Route path='/principal/student' component={StudentPrincipal} exact={true}/>
       <Route path='/principal/faculty' component={FacultyPrincipal} exact={true}/>
       <Route path='/principal/hod' component={HodPrincipal} exact={true}/>
       <Route path='/principal/performance' component={PerformancePrinciapl} exact={true}/>
       <Route Path="/home" component={Home}  exact={true}/>

       
      </Switch> 
    </BrowserRouter>
  );
}



const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
