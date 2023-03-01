import { HttpException } from '@exceptions/HttpException';
import { QuizModel, QuestionModel, Question, Quiz } from '@/models';
import { isEmpty } from '@utils/util';
import { isDocumentArray } from '@typegoose/typegoose';

class QuizService {
  public async findAllQuiz(): Promise<Quiz[]> {
    const quiz = await QuizModel.find().populate('questions', { title: 1, answers: 1 });
    return quiz;
  }

  public async generateResult(quizId: string, data): Promise<any> {
    const quiz = await QuizModel.findById(quizId, { questions: 1, _id: 0 }).populate('questions', { answer: 1, _id: 0 });
    if (!quiz) throw new HttpException(409, "Quiz doesn't exist");
    let answers = [];
    let result = 0;
    if (isDocumentArray(quiz.questions)) {
      answers = quiz.questions.map(e => e.answer);
    }
    answers.map((e, i) => {
      if (e === data.answers[i]) {
        result += 1;
      }
    });

    return { result };
  }
  public async createQuiz(data): Promise<Quiz> {
    const quiz = await QuizModel.create(data);
    return quiz;
  }

  public async addQuestion(quizId, data): Promise<Question> {
    const question = await QuestionModel.create(data);
    const quiz = await QuizModel.findById(quizId);
    quiz.questions.push(question.id);
    await quiz.save();
    return question;
  }

  public async updateQuestion(questionId: string, data): Promise<Question> {
    console.log(data);
    const question = await QuestionModel.findByIdAndUpdate(questionId, { ...data }, { new: true });
    return question;
  }

  public async updateQuiz(id: string, data): Promise<Quiz> {
    const quiz = await QuizModel.findByIdAndUpdate(id, { data });
    return quiz;
  }

  public async deleteQuiz(id: string): Promise<Quiz> {
    const quiz = await QuizModel.findByIdAndDelete(id);
    if (!quiz) throw new HttpException(409, "User doesn't exist");
    return quiz;
  }
  public async deleteQuestion(id: string): Promise<Question> {
    const question = await QuestionModel.findByIdAndDelete(id);
    if (!question) throw new HttpException(409, "User doesn't exist");
    return question;
  }
}

export default QuizService;
