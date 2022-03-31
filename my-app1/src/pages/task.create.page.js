import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createTask } from '../services/task.service';
const CreateTaskPage=(props)=>{
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const navigate=useNavigate()
    const onCreateTask=async()=>{
        if(title.length===0){
            alert('enter username')
        }else if(description.length===0){
            alert('enter password')
        }else{
           const result =await createTask(title,description)
           if(result){
               navigate('/task-list')
           }else{
               alert('invalid credentials')
           }
        }
    }
    return (
    <div>
        <h1 className="header">Create Task</h1>
        <div className="form">
            <div className="mb-3">
                <label  className="form-label">Title</label>
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea onChange={(e)=>{
                    setDescription(e.target.value)
                }} rows={5} className="form-control" id="description" ></textarea>
            </div>
            <div className="mb-3">
                <button onClick={onCreateTask} className="btn btn-success">Save</button>
                <Link to='/task-list' style={{marginLeft:'10px'}} className="btn btn-danger">Cancel</Link>
            </div>
        </div>
    </div>
    )
}

export default CreateTaskPage