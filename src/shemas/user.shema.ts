import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { UserSettings } from "./userSettings.schema";
import mongoose from "mongoose";
import { Post } from "./post.schema";

@Schema()
export class User {
    @Prop({ unique: true, required: true })
    username: string;
    @Prop({ unique: true, required: true })
    email: string;
    @Prop({ required: false })
    password?: string;
    @Prop({ required: false })
    avatar?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings' })
    settings?: UserSettings

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
    posts?: Post[]
}

export const UserShema = SchemaFactory.createForClass(User);