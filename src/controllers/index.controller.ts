import { HttpCommonResponse } from '@/utils/response';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      return new HttpCommonResponse(res, 'PONG', true);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
