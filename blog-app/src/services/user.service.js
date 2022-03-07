import axios from 'axios'
import { settings } from '../config';
export const signup=async (firstname,lastname,email,password)=>{
    const url=settings.server+'/user/signup'
    let result
    try{
     result=await axios.post(url,{firstname,lastname,email,password})
     result=result.data
    }
    catch(ex){console.log(ex)}
    
    return result
}
export const signin=async (email,password)=>{
    const url=settings.server+'/user/signin'
    let result
    try{
     result=await axios.post(url,{email,password})
     result=result.data
    }
    catch(ex){console.log(ex)}
    
    return result
}
export const getUser=async ()=>{
    const url=settings.server+`/user/profile`
    const token=sessionStorage['token']
    let response
    try{
        response=await axios.get(url,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        response=response.data

    }catch(ex){
        console.log(ex)
    }
    return response
}