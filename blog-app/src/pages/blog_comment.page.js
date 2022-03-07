import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { postComment } from "../services/blog.service"

const BlogCommentPage=(props)=>{
    const [comment,setComment]=useState('')
    const navigate=useNavigate()
    const blogid=sessionStorage.getItem('bid')
    console.log(blogid)
    const onCommentBlog=async(id)=>{
        if(comment.length===0){
            alert('enter username')
        }else{
           const result =await postComment(blogid,comment)
           console.log(result)
           if(result){
               sessionStorage.removeItem('bid')
               navigate('/Blog-list')
           }else{
               alert('invalid ')
           }
        }
    }
    return (
    <div>
        <h1 className="header">Create Task</h1>
        <div className="form">
            <div className="mb-3" >
                <label  className="form-label">Title</label>
                <textarea onChange={(e)=>{
                    setComment(e.target.value)
                }} type="text" className="form-control" id="comment" />
            </div>
            <div className="mb-3">
                <button onClick={onCommentBlog} className="btn btn-success">Save</button>
                <Link to='/task-list' style={{marginLeft:'10px'}} className="btn btn-danger">Cancel</Link>
            </div>
        </div>
    </div>
    )
}

export default BlogCommentPage