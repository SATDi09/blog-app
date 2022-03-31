/* eslint-disable prettier/prettier */
import{IsNotEmpty} from 'class-validator'
//this is data transfer object
export class CreateTaskDTO{
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    description:string;
}