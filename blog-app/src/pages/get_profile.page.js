import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Profile from "../component/profile.component"
import { getUser } from "../services/user.service"


const GetProfile=(props)=>{
    const [users,setUser]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        loadTasks()
    },[])
    const loadTasks=async()=>{
        const result= await getUser()
        console.log(result)
        if(result){
            setUser(result)
        }
    }
    return <div>
            <h1 className="header">Profile</h1>
            {users.map((user)=>{
                const {id,firstname,lastname,email,password,city,state,country,pincode,birthdate,gender}=user
                return <Profile key={id} id={id} firstname={firstname} lastname={lastname} email={email} password={password} city={city} state={state} country={country} 
                pincode={pincode} birthdate={birthdate} gender={gender} />
            })}
        </div>
    
}
export default GetProfile