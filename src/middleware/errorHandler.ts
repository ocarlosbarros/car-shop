import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ErrorCatalog, ErrorTypes } from '../errors/index';

const errorHandler: ErrorRequestHandler = (
  error: Error | ZodError,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  if (error instanceof ZodError) {
    return response.status(400).json({ message: error.issues });
  }

  const messageErrorType = error.message as keyof typeof ErrorTypes;

  const mappedError = ErrorCatalog[messageErrorType];

  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return response.status(httpStatus).json({ message });
  }

  console.error(error);
  return response.status(500).json({ message: error.message });
};

export default errorHandler;