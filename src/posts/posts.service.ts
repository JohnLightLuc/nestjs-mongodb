import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Post } from "src/shemas/post.schema";
import { CreatePostDto } from "./dtos/createPost.dto";
import { User } from "src/shemas/user.shema";
import { UpdatePostDto } from "./dtos/update-post.dto";

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

    async getPosts() {
        return this.postModel.find();
    }

    async getPostById(id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid id', 400);
        const post = await this.postModel.findById(id);
        if(!post) throw new HttpException('Post not found', 404);
        return post;
    }

    async updatePost(id: string, updatepostdto: UpdatePostDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid id', 400);
        const post = await this.postModel.findById(id);
        if(!post) throw new HttpException('Post not found', 404);
        post.updateOne(updatepostdto);
        return post;
    }

    async deletePost(id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid id', 400);
        return this.postModel.findByIdAndDelete(id);
    }
}
