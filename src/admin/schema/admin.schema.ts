import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AdminDocument = Admin & Document;

@Schema({ timestamps: true })
export class Admin {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  surname: string;

  @Prop({ type: Number })
  age: number;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
