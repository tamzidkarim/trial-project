import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
import QuizService from '@/services/quiz.service';

class QuizController {
  public quizService = new QuizService();
  public getAllQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.quizService.findAllQuiz();
      res.status(201).json({ data, message: 'getAllQuiz' });
    } catch (error) {
      next(error);
    }
  };
}

export default QuizController;
