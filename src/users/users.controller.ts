import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    async createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        // return this.usersService.createUser(createUserDto);
    }
    
}
