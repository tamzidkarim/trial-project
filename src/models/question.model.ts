import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'question', timestamps: true } })
export class Question {
  @prop({ type: String, required: true })
  public title: string;

  @prop({ type: Array, required: true, default: [] })
  public options: string[];

  @prop({ type: Number })
  public answer: number;

  @prop({ type: Boolean })
  public isMandatory = false;

  public createdAt?: Date;

  public updatedAt?: Date;
}
