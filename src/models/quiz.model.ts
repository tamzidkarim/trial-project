import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { Question } from './question.model';

@modelOptions({ schemaOptions: { collection: 'quiz', timestamps: true } })
export class Quiz {
  @prop({ type: String, required: true })
  public title: string;

  @prop({ type: String, required: true })
  public description: string;

  @prop({ ref: () => Question })
  public questions: Ref<Question>[];

  public createdAt?: Date;

  public updatedAt?: Date;
}
