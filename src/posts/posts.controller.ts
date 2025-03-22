import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreatePostDto } from "./dtos/createPost.dto";
import { PostsService } from "./posts.service";
import { UpdatePostDto } from "./dtos/update-post.dto";


@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}
    
    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }

    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postsService.getPostById(id);
    }

    @Patch(':id')
    updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.updatePost(id, updatePostDto);
    }

    @Delete(':id')
    deletePost(@Param('id') id: string) {
        return this.postsService.deletePost(id);
    }


}