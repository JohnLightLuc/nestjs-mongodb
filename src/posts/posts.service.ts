import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/shemas/post.schema";
import { CreatePostDto } from "./dtos/createPost.dto";
import { User } from "src/shemas/user.shema";

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async createPost({userId, ...post}: CreatePostDto) {
        
        const findUser = await this.userModel.findById(userId); 
        if(!findUser) throw new HttpException('User not found', 404);
        const newpost = await this.postModel.create(post);
        const savePost = await newpost.save();

        await findUser.updateOne({$push : {posts: savePost._id}});
        
        return savePost;
    }
}
