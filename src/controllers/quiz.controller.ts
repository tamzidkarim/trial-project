import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';
import QuizService from '@/services/quiz.service';
import { HttpCommonResponse } from '@/utils/response';
import { StatusCodes } from 'http-status-codes';

class QuizController {
  public quizService = new QuizService();

  public getAllQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.quizService.findAllQuiz();
      return new HttpCommonResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

  public getQuizById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.quizService.findQuizById(id);
      return new HttpCommonResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

  public createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await this.quizService.createQuiz(data);
      return new HttpCommonResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

  public editQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await this.quizService.updateQuiz(id, data);
      return new HttpCommonResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

  public deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.quizService.findAllQuiz();
      return new HttpCommonResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

  public generateResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { quizId } = req.params;
      const data = req.body;
      const result = await this.quizService.generateResult(quizId, data);
      return new HttpCommonResponse(res, result);
    } catch (error) {
      next(error);
    }
  };
}

export default QuizController;
