import axios from 'axios'
import { settings } from "../config"

export const getBlogs=async (search='')=>{
    const url=settings.server+`/blog?search=${search}`
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
export const getfullBlogs=async ()=>{
    const url=settings.server+`/blog/comment`
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
export const postprofile=async (id,firstname,lastname,email,password,city,state,country,pincode,birthdate,gender)=>{
    const url=settings.server+`/user/profile/${id}`
    let result
    try{
     result=await axios.patch(url,{id,firstname,lastname,email,password,city,state,country,pincode,birthdate,gender})
     result=result.data
    }
    catch(ex){console.log(ex)}
    
    return result
}
export const createBlogS=async (title,description,tags)=>{
    const url=settings.server+`/blog/`
    const token=sessionStorage['token']
    let response
    try{
        response=await axios.post(url,{
            title,
            description,
            tags
        },{
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
export const UpdateBlog=async (id,title,description,tags)=>{
    const url=settings.server+`/blog/${id}`
    const token=sessionStorage['token']
    let response
    try{
        response=await axios.patch(url,{ 
            title,
            description,
            tags
        },{
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
export const postComment=async(id,comment)=>{
    const url=settings.server+`/blog/comment/${id}`
    const token=sessionStorage['token']
    let response
    try{
        response=await axios.post(url,{comment},{headers:{Authorization:`Bearer ${token}`,}})
        response=response.data
    }catch(ex){
        console.log(ex)
    }
    return response
}
export const LikeDisButton=async (id,LD='')=>{
    const url=settings.server+`/task/${id}/LD=${LD}`
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
export const deleteBlog=async (id)=>{
    const url=settings.server+`/blog/${id}`
    const token=sessionStorage['token']
    console.log(id)
    let response
    try{
        response=await axios.delete(url,{
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
export const deleteComments=async (id)=>{
    const url=settings.server+`/blog/comment/${id}`
    const token=sessionStorage['token']
    console.log(id)
    let response
    try{
        response=await axios.delete(url,{
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