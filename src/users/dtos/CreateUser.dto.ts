import { IsBoolean, IsNotEmpty, IsOptional, IsString, Validate, ValidateNested } from "class-validator";


export class CreateUserSettingsDto {
    @IsOptional()
    @IsBoolean()
    receiveNotifications?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveEmails?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveSms?: boolean
}

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
    avatar?: string;

    @IsOptional()
    @ValidateNested()
    settings?: CreateUserSettingsDto
}