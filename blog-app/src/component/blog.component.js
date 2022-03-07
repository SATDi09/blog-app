import {useNavigate} from 'react-router-dom'
import { LikeButton,UpdownButton,Provider } from '@lyket/react';
import { LikeDisButton, UpdateBlog } from '../services/blog.service'
import {deleteBlog} from '../services/blog.service'
import UpdateBlogPage from '../pages/update_blog.page';
//import {dblog} from '../pages/blog_list.page'

const Blog=(props)=>{
    const {id,title,description,tags,like,dislike,userid,dblog}=props
    const navigate=useNavigate()
    const comment=()=>{
        sessionStorage['bid']=id
       // console.log(bid)
        navigate('/blog-comment')
    }
    const update=()=>{
        sessionStorage['bid']=id
        navigate('/update-blog')
    }
    
    const LikeDis=async (id,LD)=>{
        LD='LIKE'
        const result = await LikeDisButton(id,LD)
            if(result){
                console.log(result)
            }
    }
    
    const deleteBlogs=async ()=>{
        const uid=id
        const result=await dblog(uid) 
    }
    const readmore=async()=>{
        navigate('/openblog')
    }
    return <div className="card" style={{width:'50rem',marginLeft:'25%',display:'flex'}}>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{tags}</p>
                <button onClick={comment} className="btn btn-success">Comment</button>
                <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                    <UpdownButton
                        namespace="my-documentation"
                        id="like-dislike-buttons-api"
                    />
                </Provider>
                <button onClick={deleteBlogs} className="btn btn-danger">Delete</button>
                <button onClick={update} className="btn btn-warning">Update</button>
                <button onClick={readmore} className="btn btn-warning" style={{float:'right'}}>Read more</button>

                </div>
            </div>  
}
export default Blog