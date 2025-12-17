import { AppError } from './AppError';

export class ValidationError extends AppError {
  constructor(message = 'Invalid request data') {
    super(message, 400);
  }
}
