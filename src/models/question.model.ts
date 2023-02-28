import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'question', timestamps: true } })
export class Question {
  @prop({ type: String, required: true })
  public title: string;

  @prop({ type: Map, required: true, default: [] })
  public answers: Answers[];

  @prop({ type: Boolean, required: true })
  public isMandatory = false;

  public createdAt?: Date;

  public updatedAt?: Date;
}

interface Answers {
  title: string;
  isRight: boolean;
}
