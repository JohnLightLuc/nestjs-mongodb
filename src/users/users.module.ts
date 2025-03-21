import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserShema } from 'src/shemas/user.shema';
import { UsersController } from './users.controller';
import { UserSettingsShema } from 'src/shemas/userSettings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
        name: 'User', 
        schema: UserShema 
      },
      {
        name: 'UserSettings',
        schema: UserSettingsShema
      }
    ])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
