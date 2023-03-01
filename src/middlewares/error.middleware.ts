import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { logger } from '@utils/logger';
import { StatusCodes } from 'http-status-codes';
import { HttpCommonResponse } from '@/utils/response';
import { ErrorCodes } from '@/config/constants';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  console.trace('Error Trace', error);
  try {
    const status: number = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const message: string | number = error.message || ErrorCodes.SomethingWentWrong.toString();

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    return new HttpCommonResponse(res, null, false, status, [message]);
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
