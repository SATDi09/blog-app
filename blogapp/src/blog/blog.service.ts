/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { BlogEntity } from "./blog.entity";
import { BlogLD } from "./blog.enum";
import { BlogRepository } from "./blog.repository";
import { CommentEntity } from "./comment.entity";
import { commentRepository } from "./comment.repository";
import { CreateBlogDTO } from "./dto/create.blog.dto";
import { LikeDisDto } from "./dto/likedis.blog.dto";
import { PostCommentDTO } from "./dto/post.comment.dto";
import { SearchBlogDto } from "./dto/search.blog.dto";
//import {CommentRepository} from './comment.repository'

@Injectable()
export class BlogService{
    constructor(@InjectRepository(BlogRepository) private blogRepository:BlogRepository,
    @InjectRepository(commentRepository) private commentRepository:commentRepository){}

    async getBlog(searchblogdto:SearchBlogDto,user:UserEntity){
        return this.blogRepository.getBlog(searchblogdto,user)
    }

    
    async getComments(searchblogdto:SearchBlogDto,blog:BlogEntity,user:UserEntity){
        return this.blogRepository.getComments(searchblogdto,blog,user)
    }

    async createBlog(createBlogdto:CreateBlogDTO,user:UserEntity){
        return this.blogRepository.createBlog(createBlogdto,user)
    }

    async updateBlog(id:string,createBlogdto:CreateBlogDTO){
        await this.blogRepository.updateBlog(id,createBlogdto)
    }

    async updateBlogLD(id:string,LD:BlogLD){
        await this.blogRepository.updateBlogLD(id,LD)
    }

    async deleteBlog(id:string){
        const result=await this.blogRepository.delete(id)
        if(result.affected==0){
            throw new NotFoundException(`task not found`)
        }
        return result
    }
    async postComment(postcommentdto:PostCommentDTO,user:UserEntity,blog:BlogEntity,id:string){
        return this.blogRepository.postComment(postcommentdto,user,blog,id)
    }
    async deleteComments(id:number){
       return this.commentRepository.deleteComments(id)
    }
}