import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type FavoriteDocument = HydratedDocument<Favorite>;

@Schema({ timestamps: true })
export class Favorite {
  @Prop({ required: true, type: String })
  profile_id: String;
  @Prop({ required: true, type: String })
  name: String;
  @Prop({ type: String })
  favorite1: String;
  @Prop({ type: String })
  favorite2: String;
  @Prop({ type: String })
  favorite3: String;
}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);
