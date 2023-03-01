import { HttpResponse } from '@/interfaces/response.interface';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class HttpCommonResponse {
  constructor(res: Response, data: any, success = true, httpStatus = StatusCodes.OK, errors: string[] | null = null) {
    const responseData: HttpResponse = {
      success: success,
      errors: errors,
      data: data,
    };
    return res.status(httpStatus).send(responseData);
  }
}
