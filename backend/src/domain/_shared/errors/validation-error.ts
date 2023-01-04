import { DomainError } from '../domain-error';

export class ValidationError extends DomainError {
  name = 'ValidationError';
  constructor(message: string, readonly cause?: any) {
    super(message, cause);
  }

  static of(message?: any) {
    return new ValidationError(message);
  }
}
