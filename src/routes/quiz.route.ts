import { Router } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';
import QuizController from '@/controllers/quiz.controller';

class QuizRoute implements Routes {
  public path = '/quiz';
  public router = Router();
  public quizController = new QuizController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.quizController.getAllQuiz);
    this.router.get(`${this.path}/:id`, this.quizController.editQuiz);
    this.router.post(`${this.path}/`, this.quizController.createQuiz);
    this.router.put(`${this.path}/:id`, this.quizController.editQuiz);
    this.router.post(`${this.path}/:id/question`, this.quizController.addQuestion);
    this.router.put(`${this.path}/:quizId/question/:questionId`, this.quizController.editQuestion);
    this.router.delete(`${this.path}/:quizId/question/:questionId`, this.quizController.deleteQuestion);
    this.router.post(`${this.path}/:quizId/result`, this.quizController.generateResult);
    this.router.delete(`${this.path}/:id`, this.quizController.deleteQuiz);
  }
}

export default QuizRoute;
