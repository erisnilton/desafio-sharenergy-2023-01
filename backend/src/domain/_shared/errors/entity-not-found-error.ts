import { Id } from 'src/domain/_shared/value-object/id.vo';
import { DomainError } from '../domain-error';
import { Entity } from '../entity';

export class EntityNotFoundError extends DomainError {
  name = 'EntityNotFoundError';
  constructor(message: string, readonly cause?: any) {
    super(message, cause);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  static ofId<E extends Function & { prototype: Entity<any> }>(
    entity: E,
    id: Id,
    cause?: any,
  ) {
    return new EntityNotFoundError(`${entity.name} not found`, {
      id: id.value,
      cause,
    });
  }
}
