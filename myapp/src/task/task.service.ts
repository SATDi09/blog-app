/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { CreateTaskDTO } from './dto/create_task.dto';
//import { Task,TaskStatus } from './task.model';
//import * as uuid from 'uuid' //import uuid to generate new id for task
import { SearchTasksDTO } from './dto/searchTask.dto';
import { TaskStatus } from './task.enum';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor (@InjectRepository(TaskRepository) private taskRepository:TaskRepository){}
    //store all tasks
    //private tasks:Task[]=[];

    async getTasks(searchDto:SearchTasksDTO,user:UserEntity){
        return this.taskRepository.getTask(searchDto,user);
       /*const {search,status}=searchDto;
         let tasks=this.tasks
        if(search){
            tasks=tasks.filter(task=>{
              return task.title.includes(search) || task.description.includes(search);  
            });
        }
        if(status){
            tasks=tasks.filter(task=>{
              return task.status==status;  
            });
        }
        return tasks;*/  
    }

    //create new task
    async createTask(createTaskDto:CreateTaskDTO,user:UserEntity) {
        return this.taskRepository.createTask(createTaskDto,user)
      /*   //generate new id
         const newId=uuid.v1();
        
        //create new task
        const task:Task={
            id:newId,
            title:createTaskDto.title,
            description:createTaskDto.description,
            status:TaskStatus.OPEN
        }

        //add this task to tasks list
        this.tasks.push(task);

        return this.tasks;*/
    }
    async  getTaskbyId(id:string){
        //select * from task where id=id
        const task=await this.taskRepository.findOne(id);
        if(!task){
            throw new NotFoundException(`task not found`)
        }
        return task;
        /*const task=this.tasks.find((task)=>{
            return task.id==id;
        });
        if(!task){
            throw new NotFoundException('task not found');
        }
        return task;*/
    }
    async updateTaskStatus(id:string,status:TaskStatus){
        const task=await this.getTaskbyId(id)
        task.status=status
        await task.save()
        return task
      /*  const task=this.getTaskbyId(id)
        task.status=status;
        return task;*/
    }
    async deleteTask(id:string){
        const result=await this.taskRepository.delete(id)
        if(result.affected==0){
            throw new NotFoundException(`task not found`)
        }
        return result
      /*  this.getTaskbyId(id)

        //select all tasks whose id is not matching
        this.tasks=this.tasks.filter((task)=>task.id!=id)
        return this.tasks*/
    }
}
