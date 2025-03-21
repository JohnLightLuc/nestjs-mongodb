import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shemas/user.shema';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { UserSettings } from 'src/shemas/userSettings.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel( User.name) private userModel: Model<User>, 
        @InjectModel(UserSettings.name) private userSettingsModel: Model<UserSettings>
    ) {}

    async createUser({settings, ...createUserDto }: CreateUserDto) {
        if(settings) {
            const newUserSettings = new this.userSettingsModel(settings);
            const saveSetting = await newUserSettings.save();
            const newUser = new this.userModel({...createUserDto, settings: saveSetting._id});
            return newUser.save();
        }
        const user = new this.userModel(createUserDto);
        return user.save();
    }

    getUsers() {
        return this.userModel.find().populate(['settings', "posts"]);
    }

    getUserById(id: string) {
        return this.userModel.findById(id).populate('settings');
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto).populate('settings');
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }

}

