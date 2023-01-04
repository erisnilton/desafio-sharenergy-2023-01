import { ValidationError } from './../errors/validation-error';
import { ValueObject } from '../value-object';

export abstract class Id<T = any> implements ValueObject {
  #value: T;

  get value(): T {
    return this.#value;
  }

  protected constructor(id: T) {
    if (id === null || id === undefined) {
      throw ValidationError.of('Id cannot be null or undefined');
    }
    this.#value = id;
  }

  equals(vo: Id<T>): boolean {
    return vo instanceof Id && this.value === vo.value;
  }

  toJSON(): T {
    return this.value;
  }
}
