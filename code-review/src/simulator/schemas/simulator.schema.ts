import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
export type SimulatorDocument = mongoose.HydratedDocument<Simulator>;

@Schema({ timestamps: true })
export class Simulator {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  profile_id: mongoose.Schema.Types.ObjectId;
  @Prop({ type: String })
  cryptocurrency: String;
  @Prop({ type: String })
  name: String;
  @Prop({ type: Date })
  start_date: Date;
  @Prop({ type: Date })
  check_date: Date;
  @Prop({ type: String })
  divisa: String;
  @Prop({ type: Number })
  Crypto_price_start: Number;
  @Prop({ type: Number })
  Crypto_price_check: Number;
}

export const SimulatorSchema = SchemaFactory.createForClass(Simulator);
