import { IsString,IsEmail,} from "class-validator";

export class UserDto{
    @IsString()
    password:string

    @IsEmail()
    @IsString()
    email:string

    @IsString()
    username:string
}