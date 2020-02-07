import axios from 'axios'
import swal from 'sweetalert'

export const setUser=(user={})=>{
    return{
        type:'SET_USER',
        payload:user
    }
}

export const startRegisterUser=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3015/users/register',formData)
       .then((response)=>{
           if(response.data.hasOwnProperty('errors')){
               alert(response.data.message)
           }else{
               alert('successfully registered')
               dispatch(setUser())
               props.history.push('/users/login')
           }
       })
       .catch((err)=>{
           console.log(err)
       })
    }
}

export const startLoginUser=(formData,props)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3015/users/login',formData)
        .then((response)=>{
            if(response.data.errors){
                swal('Invalid UserName/Password',"You are not authorized!!!","error")
            }
            else{
                const {token}=response.data
                localStorage.setItem('authToken',token)
                Promise.all([axios.get('http://localhost:3015/users/account',{
                    headers:{'x-auth':token}
                })])

            .then(values=>{
                const [userResponse]=values
                dispatch(setUser(userResponse.data))
                props.history.push('/')
                swal('Logged In Successfully',"You are good to go","success")
              })
            }
        })
    }
}

export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3015/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const user=response.data
            dispatch(setUser(user))
        })
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}

export const startLogoutUser = (props) => {
    return(dispatch=>{
        axios.delete('http://localhost:3015/users/logout',{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response=>{
                if(response.data.errors){
                    alert(response.data.message)
                } else {
                    localStorage.clear()
                    dispatch(removeUser())
                    //props.history.push('/users/login')
                    window.location.assign('/users/login')
                }
            })
    })
}