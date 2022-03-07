import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { postprofile } from '../services/blog.service'

const ProfilePage=(props)=>{
    const id=sessionStorage.getItem('userid')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [country,setCountry]=useState('')
    const [pincode,setPincode]=useState('')
    const [birthdate,setBirthDate]=useState('')
    const [gender,setGender]=useState('')
    const navigate=useNavigate()
    const postprofileofuser =async ()=>{
        if(firstname.length===0){
            alert(`Enter Username`)
        }else if(lastname.length===0){
            alert(`Enter Username`)
        }
        else if(email.length===0){
            alert(`Enter Username`)
        }
        else if(password.length===0){
            alert(`Enter Password`)
        }else{
           const result= await postprofile(id,firstname,lastname,email,password,city,state,country,pincode,birthdate,gender)
            if(result){
                //go to signin
                navigate('/blog-list')
            }
        }
    }
    return (<div>
        <h1 className="header">User Profile</h1>
        <div className="form">
            <div class="mb-3">
                <label className="form-label">First Name</label>
                <input onChange={(e)=>{
                    setFirstname(e.target.value)
                    }} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Last Name</label>
                <input onChange={(e)=>{
                    setLastname(e.target.value)
                    }} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                    }} type="email" className="form-control"  aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                    }} type="password" className="form-control" />
            </div>
            <div className="mb-3">
                <label  className="form-label">City</label>
                <input onChange={(e)=>{
                    setCity(e.target.value)
                    }} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label  className="form-label">State</label>
                <input onChange={(e)=>{
                    setState(e.target.value)
                    }} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Country</label>
                <input onChange={(e)=>{
                    setCountry(e.target.value)
                    }} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Pin COde</label>
                <input onChange={(e)=>{
                    setPincode(e.target.value)
                    }} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Birth Date</label>
                <input onChange={(e)=>{
                    setBirthDate(e.target.value)
                    }} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Gender</label>
                <input onChange={(e)=>{
                    setGender(e.target.value)
                    }} type="text" className="form-control"  />
            </div>
            <button onClick={postprofileofuser} type="submit" className="btn btn-primary">Submit</button>
        </div>

    </div>)
}

export default ProfilePage