import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;
    @IsString()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @IsString() 
    password: string;
    @IsString()
    @IsOptional()
    avatar?: string
}