import { prop, modelOptions } from '@typegoose/typegoose';
import { warnMixed } from '@typegoose/typegoose/lib/internal/utils';
import { Schema } from 'mongoose';

@modelOptions({ schemaOptions: { collection: 'quiz', timestamps: true }, options: { allowMixed: 0 } })
export class Quiz {
  @prop({ type: String })
  public title: string;

  @prop({ type: String })
  public description: string;

  @prop({ type: Array, default: [] })
  public questions: Question[];

  @prop({ type: Boolean, default: false })
  public isPublished: boolean;

  public createdAt?: Date;

  public updatedAt?: Date;
}

interface Question {
  title: string;
  options: string[];
  answer: number;
}
