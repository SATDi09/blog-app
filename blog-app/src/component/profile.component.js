import { useNavigate } from "react-router-dom"

const Profile=(props)=>{
    const {id,firstname,lastname,email,city,state,country,pincode,birthdate,gender}=props

    const navigate=useNavigate()
    const postprofile=()=>{
        
        navigate('/postprofile')
    }
    const bloglist=()=>{
        
        navigate('/blog-list')
    }
    return <div className="card" style={{width:'50rem',marginLeft:'25%',display:'flex'}}>
                <div className="card-body">
                <h4 className="card-title">{firstname} {lastname}</h4>
                <p className="card-text">{email}</p>
                <p className="card-text">{city} {pincode}</p>
                <p className="card-text">{birthdate} {gender}</p>
                <button onClick={postprofile} className="btn btn-success">Update</button>
                <button onClick={bloglist} className="btn btn-success" style={{float:'right'}}>blog_List</button>

                </div>
            </div>  
}
export default Profile