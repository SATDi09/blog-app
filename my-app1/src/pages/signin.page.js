import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../services/user.service"

const SigninPage=(props)=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const onSignin=async()=>{
        if(username.length===0){
            alert('enter username')
        }else if(password.length===0){
            alert('enter password')
        }else{
           const result =await signin(username,password)
           if(result){
               const {token}=result
               sessionStorage['token']=token
               sessionStorage['username']=username
               navigate('/task-list')
            } else {
               alert('invalid credentials')
           }
        }
    }
    return (
    <div>
        <h1 className="header">SignIn</h1>
        <div className="form">
            <div className="mb-3">
                <label  className="form-label">Username</label>
                <input onChange={(e)=>{
                    setUsername(e.target.value)
                }} type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
            <div>Dont't have an account? Signup <Link to="/signup">here</Link></div>
              <button onClick={onSignin} className="btn btn-success">SignIn</button> 
            </div>
        </div>
    </div>
    )
}

export default SigninPage