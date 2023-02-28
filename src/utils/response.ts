import { HttpResponse } from '@/interfaces/response.interface';
import { Response } from 'express';

export class HttpCommonResponse {
  constructor(res: Response, data: any, success: boolean, httpStatus = 200, errors: string[] | null = null) {
    const responseData: HttpResponse = {
      success: success,
      errors: errors,
      data: data,
    };
    return res.status(httpStatus).send(responseData);
  }
}
