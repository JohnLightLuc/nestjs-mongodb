import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

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
}

export const UserShema = SchemaFactory.createForClass(User);