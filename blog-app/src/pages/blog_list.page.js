import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteBlog, getBlogs } from "../services/blog.service"
import Blog from "../component/blog.component"
import {DropdownButton,Dropdown} from 'react-bootstrap'

const BlogListPage=(props)=>{
    const [blogs,setBlogs]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        loadTasks()
    },[])
    const loadTasks=async(search)=>{
        const result= await getBlogs(search)
        if(result){
            setBlogs(result)
        }
    }
    const logout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userid')
        sessionStorage.removeItem('username')
        navigate('/signin')
    }
    async function dblog(id)

    {

        console.log(id)

        const result=await deleteBlog(id)

        if(result){
            loadTasks()
        }

    }
    return <div>
        <DropdownButton id="dropdown-basic-button" title="User" style={{float:'right'}}>
        <Dropdown.Item href="/profilepage">Profile</Dropdown.Item>
        <Dropdown.Item  href="/create-blog">Create Blog</Dropdown.Item>
        <Dropdown.Item onClick={logout} href="#/action-2">Logout</Dropdown.Item>
        </DropdownButton>
        <h1 className="header">Blogs List</h1>
        {blogs.map((blog)=>{
            const {id,title,description,tags,like,dislike,userid}=blog
            return <Blog key={id} id={id} title={title} description={description} tags={tags}
            like={like} dislike={dislike} userid={userid} dblog={dblog}/>
            
        })}
    </div>
}

export default BlogListPage