import { HttpException } from '@exceptions/HttpException';
import { QuizModel } from '@/models';
import { isEmpty } from '@utils/util';
import { isDocumentArray } from '@typegoose/typegoose';
import { Quiz } from '@/interfaces/quiz.interface';
import { CreateQuizDto } from '@/dtos/quiz.dto';
import { StatusCodes } from 'http-status-codes';
class QuizService {
  public async findAllQuiz(): Promise<Quiz[]> {
    const quiz = await QuizModel.find({}, { questions: 0 });
    return quiz;
  }

  public async findQuizById(id: string): Promise<Quiz> {
    const quiz = await QuizModel.findById(id);
    if (!quiz) throw new HttpException(StatusCodes.NOT_FOUND, "quiz doesn't exist");
    return quiz;
  }

  public async createQuiz(data: CreateQuizDto): Promise<Quiz> {
    const quiz = await QuizModel.create(data);
    return quiz;
  }

  public async updateQuiz(id: string, data: CreateQuizDto): Promise<Quiz> {
    const quiz = await QuizModel.findByIdAndUpdate(id, data, { new: true });
    if (!quiz) throw new HttpException(StatusCodes.NOT_FOUND, "quiz doesn't exist");
    return quiz;
  }

  public async deleteQuiz(id: string): Promise<Quiz> {
    const quiz = await QuizModel.findByIdAndDelete(id);
    if (!quiz) throw new HttpException(StatusCodes.NOT_FOUND, "quiz doesn't exist");
    return quiz;
  }

  public async generateResult(quizId: string, data): Promise<any> {
    const quiz: Quiz = await QuizModel.findById(quizId, { questions: 1, _id: 0 });
    if (!quiz) throw new HttpException(StatusCodes.NOT_FOUND, "Quiz doesn't exist");
    let answers = [];
    let result = 0;
    answers = quiz.questions.map(e => e.answer);
    answers.map((e, i) => {
      if (e === data.answers[i]) {
        result += 1;
      }
    });

    return { result };
  }
}

export default QuizService;
