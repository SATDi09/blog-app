import {useNavigate} from 'react-router-dom'
import { LikeButton,UpdownButton,Provider } from '@lyket/react';
import { LikeDisButton, UpdateBlog } from '../services/blog.service'
import {deleteBlog} from '../services/blog.service'
import UpdateBlogPage from '../pages/update_blog.page';
//import {dblog} from '../pages/blog_list.page'

const Comment=(props)=>{
    const {id,title,description,tags,like,dislike,userid,comments,dComments}=props
    const navigate=useNavigate()
    console.log(comments)
    const comment=comments.map((comment1)=>{
        const {comment}=comment1
        console.log(comment)
        return comment 
    })
    const delComments=async()=>{
        const uid=id
        const result=await dComments(uid) 
    }
    return <div className="card" style={{width:'50rem',marginLeft:'25%',display:'flex'}}>
                <div className="card-body">
                <h3>Blog Content:</h3> 
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <p className="card-text">{tags}</p>
                <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                    <UpdownButton
                        namespace="my-documentation"
                        id="like-dislike-buttons-api"
                    />
                </Provider> <br />
                <h5>Comments :</h5>
                <p className="card-text">{comment}</p>
                <button onClick={delComments} className="btn btn-warning" style={{float:'right'}}>Delete Comments</button>
                </div>
            </div>  
}
export default Comment