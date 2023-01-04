import { DomainError } from './../../../domain/_shared/domain-error';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'src/domain/_shared/errors/validation-error';
import { EntityNotFoundError } from 'src/domain/_shared/errors/entity-not-found-error';

@Catch(DomainError)
export class DomainErrorFilter implements ExceptionFilter<DomainError> {
  catch(exception: DomainError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    if (exception instanceof ValidationError) {
      return response.status(422).json({
        name: exception.name,
        message: exception.message,
        cause: exception.cause,
      });
    }
    if (exception instanceof EntityNotFoundError) {
      return response.status(404).json({
        name: exception.name,
        message: exception.message,
        cause: exception.cause,
      });
    }
    return response.status(500).json({
      name: exception.name,
      message: exception.message,
      cause: exception.cause,
    });
  }
}
