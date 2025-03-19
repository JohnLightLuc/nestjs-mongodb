import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shemas/user.shema';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    createUser(createUserDto: CreateUserDto) {
        const user = new this.userModel(createUserDto);
        return user.save();
    }
}

