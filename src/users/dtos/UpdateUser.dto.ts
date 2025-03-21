import { IsOptional, IsString } from "class-validator"

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    username?: String;

    @IsOptional()
    @IsString()
    email?: String;

    @IsOptional()
    @IsString()
    password?: String;

    @IsOptional()
    @IsString()
    avatar?: String;
}