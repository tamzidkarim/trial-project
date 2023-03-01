import { getModelForClass } from '@typegoose/typegoose';
import { User } from './user.model';
import { Quiz } from './quiz.model';
import { Question } from './question.model';

export const UserModel = getModelForClass(User);
export const QuizModel = getModelForClass(Quiz);
export const QuestionModel = getModelForClass(Question);

export { User, Quiz, Question };
