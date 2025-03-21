import { Module, Post } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { mongo } from "mongoose";
import { PostShema } from "src/shemas/post.schema";
import { PostsController } from "./posts.controller";
import { UserShema } from "src/shemas/user.shema";
import { PostsService } from "./posts.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Post', 
                schema: PostShema
            },
            {
                name: 'User',
                schema: UserShema
            }
        ])
    ],
    controllers: [PostsController],
    providers: [PostsService],
    exports: []
})
export class PostsModule {}