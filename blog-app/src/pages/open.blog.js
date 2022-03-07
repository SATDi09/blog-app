import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteBlog, deleteComments, getBlogs, getfullBlogs } from "../services/blog.service"
import Blog from "../component/blog.component"
import {DropdownButton,Dropdown} from 'react-bootstrap'
import Comment from "../component/comment.component"

const  Openblog=()=>{
    const [blogs,setBlogs]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        loadTasks()
    },[])
    const loadTasks=async()=>{
        const result= await getfullBlogs()
        console.log(result)
        if(result){
            setBlogs(result)
        }
    }
    async function dComments(id)

    {

        console.log(id)

        const result=await deleteComments(id)

        if(result){
            loadTasks()
        }

    }
    return <div>
        <DropdownButton id="dropdown-basic-button" title="User" style={{float:'right'}}>
        <Dropdown.Item href="/profilepage">Profile</Dropdown.Item>
        <Dropdown.Item  href="/create-blog">Create Blog</Dropdown.Item>
        </DropdownButton>
        <h1 className="header">Blogs List</h1>
        {blogs.map((blog)=>{
            const {id,title,description,tags,like,dislike,userid,comments}=blog
            comments.map((comment1)=>{
                const {comment}=comment1
                console.log(comment)
                return <Comment comment={comment}/>
            })
            return <Comment key={id} id={id} title={title} description={description} tags={tags}
            like={like} dislike={dislike} userid={userid} comments={comments} dComments={dComments}/>
            
        })}
        
    </div>
}
export default Openblog