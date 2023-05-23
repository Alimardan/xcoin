import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({ required: true, type: String })
  name: String;
  @Prop({ type: String })
  nickname: String;
  @Prop({ required: true, type: String })
  email: String;
  @Prop({ type: Number })
  capital: Number;
  @Prop({ type: String })
  divisa: String;
  @Prop({ type: String })
  prefered_cryptocurrency: String;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
