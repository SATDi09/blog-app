/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { CommentEntity } from "./comment.entity";

@EntityRepository(CommentEntity)
export class commentRepository extends Repository<CommentEntity>{
    async deleteComments(id:number){
        let i
        const query=this.createQueryBuilder('Comment')
        query.andWhere(`Comment.blogId=:blogId`,{blogId:id})
        const comments=await query.getMany()
        if(comments.length==0){
            console.log('nothing')
            return
        }else{
            for( i=0;i<comments.length;i++){
                this.delete(comments[i])
            }
            
        }
        
    }
}