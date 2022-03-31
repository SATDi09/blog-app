/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDTO } from "./dto/auth.credentials.dto";
import { UserEntity } from "./user.entity";
import * as crypto from 'crypto-js'

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{
    async signup(authCredentialsDTO:AuthCredentialsDTO) {
        const user=new UserEntity()
        user.username=authCredentialsDTO.username
        user.password=`${crypto.MD5(authCredentialsDTO.password)}`;
        await user.save()
    }
    async signin(authCredentialsDTO:AuthCredentialsDTO){
       const {username,password}=authCredentialsDTO
       const user=await this.findOne({username:username})
        if(user && user.validatePassword(password)){
            return user
        }
        return null
    }
}