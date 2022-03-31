/* eslint-disable prettier/prettier */
import { UserEntity } from "src/user/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDTO } from "./dto/create_task.dto";
import { SearchTasksDTO } from "./dto/searchTask.dto";
import { TaskEntity } from "./task.entity";
import { TaskStatus } from "./task.enum";

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity>{
    async getTask(searchDto:SearchTasksDTO,user:UserEntity){
        const {search,status}=searchDto;
        const query=this.createQueryBuilder('task');
        if(status){
            //search by status
            query.andWhere('task.status=:status',{status:status});
        }
        if(search){
            //search by title and description
            query.andWhere(
                `(task.title LIKE :search) OR (task.description LIKE :search)`,
                {search:`%${search}%`}
            )
        }
        query.andWhere(`task.userId=:userId`,{userId:user.id})
        //const tasks=await this.find()
        return await query.getMany();
    }
    async createTask(createTaskDto:CreateTaskDTO,user:UserEntity){
        //create row in task table(TaskEntity)
        const task=new TaskEntity()
        task.title=createTaskDto.title
        task.description=createTaskDto.description
        task.status=TaskStatus.OPEN
        task.user=user
        //create new row
        await task.save()
        delete task.user
        return task;
    }
    //Task(){}
}
