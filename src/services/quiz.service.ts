import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { QuizModel } from '@/models';
import { isEmpty } from '@utils/util';
import { Quiz } from '@/models/quiz.model';

class QuizService {
  public async findAllQuiz(): Promise<Quiz[]> {
    const quiz = await QuizModel.find();
    return quiz;
  }
}

export default QuizService;
