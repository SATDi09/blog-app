import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Task from "../components/task.component"
import { changeTaskStatus, getTasks } from "../services/task.service"

const TaskListPage=(props)=>{
    const [tasksDone,setTasksDone]=useState([])
    const [tasksInprogress,setTasksInProgress]=useState([])
    const [tasksOpen,setTasksOpen]=useState([])
    const navigate=useNavigate()
    //this function is for as soon as page loads
    useEffect(()=>{
        reloadTasks()
    },[])
    const reloadTasks=()=>{
        loadTasks('OPEN',setTasksOpen)
        loadTasks('In_PROGRESS',setTasksInProgress)
        loadTasks('DONE',setTasksDone)
    }
    const loadTasks=async(status,func)=>{
        const result= await getTasks(status)
        if(result){
            func(result)
        }
    }
    const changeStatus=async (id,status)=>{
        const result=await changeTaskStatus(id,status)
        if(result){
            reloadTasks()
        }
    }
    const logout=()=>{
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        navigate('/signin')
    }
    return (
    <div>
        <button onClick={logout} style={{float:'right'}} className="btn btn-warning">Logout</button>
        <h1 className="header">Task List</h1>
        <Link to="/task-create">Create new Task</Link>
        <div className="row">
            <div className="col" style={{borderLeft:'dotted 5px black',borderRight:'dotted 5px black'}}>
                <h4 className="header">Open</h4>
                {tasksOpen.length>0 && tasksOpen.map((task)=>{
                const{id,title,description,status}=task
                return <Task key={id} id={id} title={title} description={description} status={status} changeStatus={changeStatus}/>
                })}
                {tasksOpen.length ===0 && <div className="header">No Open Tasks</div>}
            </div>
            <div className="col" style={{borderLeft:'dotted 5px black',borderRight:'dotted 5px black'}}>
                <h4 className="header">In Progress</h4>
                {tasksInprogress.length>0 && tasksInprogress.map((task)=>{
                 const{id,title,description,status}=task
                return <Task key={id} id={id} title={title} description={description} status={status} changeStatus={changeStatus}/>
                 })}
                {tasksInprogress.length ===0 && <div className="header">No In Progress Tasks</div>} 
            </div>
            <div className="col" style={{borderLeft:'dotted 5px black',borderRight:'dotted 5px black'}}>
                <h4 className="header">Done</h4>
                {tasksDone.length>0 && tasksDone.map((task)=>{
                const{id,title,description,status}=task
                return <Task key={id} id={id} title={title} description={description} status={status} changeStatus={changeStatus}/>
                })}
                {tasksDone.length===0 && <div className="header">No Done Tasks</div>}
            </div>
        </div>
        <div></div>
    </div>
    )
}

export default TaskListPage