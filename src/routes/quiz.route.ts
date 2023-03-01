import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import QuizController from '@/controllers/quiz.controller';
import { GenerateResultDto } from '@/dtos/quiz.dto';

class QuizRoute implements Routes {
  public path = '/quiz';
  public router = Router();
  public quizController = new QuizController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.quizController.getAllQuiz);
    this.router.get(`${this.path}/:id`, this.quizController.getQuizById);
    this.router.post(`${this.path}/`, this.quizController.createQuiz);
    this.router.put(`${this.path}/:id`, this.quizController.editQuiz);
    this.router.post(`${this.path}/:quizId/result`, validationMiddleware(GenerateResultDto, 'body'), this.quizController.generateResult);
    this.router.delete(`${this.path}/:id`, this.quizController.deleteQuiz);
  }
}

export default QuizRoute;
