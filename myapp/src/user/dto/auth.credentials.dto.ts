/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class AuthCredentialsDTO{
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(10)
    username:string

    @IsNotEmpty()
    password:string
}