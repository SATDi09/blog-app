/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.enum';
//this is data transfer object
export class SearchTasksDTO{
   
    search:string;
   
    status:TaskStatus;
}