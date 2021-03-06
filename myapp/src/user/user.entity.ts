/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from 'crypto-js'
import { TaskEntity } from "src/task/task.entity";

@Entity('User')
@Unique(['username'])
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username:string

    @Column()
    password:string

    @OneToMany(type=>TaskEntity,task=>task.user,{eager:true})
    tasks:TaskEntity[];
    

    validatePassword(password:string){
        const encrypted=`${crypto.MD5(password)}`
        return encrypted==this.password
    }
}