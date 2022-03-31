/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { JwtPayload } from './jwt.payload';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository) private userRepository:UserRepository,
        private  jwtService:JwtService,
        ){}
    async signup(authCredentialsDTO:AuthCredentialsDTO) {
        return this.userRepository.signup(authCredentialsDTO)
    }
    async signin(authCredentialsDTO:AuthCredentialsDTO){
        const user=await this.userRepository.signin(authCredentialsDTO) 
        if(!user){
            throw new NotFoundException(`user not found`)

        }
        
    //return {username:authCredentialsDTO.username}
        //create jwt token
     const payload:JwtPayload={username:authCredentialsDTO.username,id:user.id};
     const token= await this.jwtService.sign(payload);
     return {token}

}

}
