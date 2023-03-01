import { IsBoolean, IsString, IsOptional, ValidateNested, IsNumber, IsArray } from 'class-validator';
import { Question } from '@/interfaces/quiz.interface';

export class CreateQuizDto {
  @IsString()
  @IsOptional()
  public title: string;

  @IsString()
  @IsOptional()
  public description: string;

  @ValidateNested()
  @IsOptional()
  public questions: Question[];

  @IsBoolean()
  @IsOptional()
  public isPublished: string;
}

export class UpdateQuizDto {}

export class GenerateResultDto {
  @IsNumber({}, { each: true, message: 'answers must be an array of numbers' })
  public answers: number[];

  @IsString()
  public test: string;
}
