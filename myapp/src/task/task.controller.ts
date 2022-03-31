/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/get.user.decorator';
import { UserEntity } from 'src/user/user.entity';
import { CreateTaskDTO } from './dto/create_task.dto';
import { SearchTasksDTO } from './dto/searchTask.dto';
import { TaskStatus } from './task.enum';
import { TaskService } from './task.service';

@Controller('task')
@UseGuards(AuthGuard())
export class TaskController {
  //dependency injection//TaskCOntroller is dependent on taskservice
  constructor(private taskService:TaskService){}
  
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@GetUser() user:UserEntity,@Body() createTaskDto:CreateTaskDTO) {
     return this.taskService.createTask(createTaskDto,user);
  }

  @Get() 
  getTasks(@GetUser() user:UserEntity,@Query() searchDto:SearchTasksDTO) {
    return this.taskService.getTasks(searchDto,user);
  }

  @Patch('/:id/:status')
  updateTask(@GetUser() user:UserEntity,@Param('id') id:string, @Param('status') status:TaskStatus) {
    return this.taskService.updateTaskStatus(id,status);
  }
  
  @Delete('/:id')
  deleteTask(@GetUser() user:UserEntity,@Param('id') id:string) {
    return this.taskService.deleteTask(id)
  }
}
