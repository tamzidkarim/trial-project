import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'user', timestamps: true } })
export class User {
  @prop({ type: String, required: true, unique: true })
  public email: string;

  @prop({ type: String, required: true, select: false })
  public password: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}
